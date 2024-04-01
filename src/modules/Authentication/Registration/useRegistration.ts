import { useState } from "react";
import {
  browserSupportsWebAuthn,
  startRegistration,
} from "@simplewebauthn/browser";

export const useRegistration = () => {
  const [username, setUsername] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationError, setRegistrationError] = useState<null | string>(
    null
  );

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onRegister = async () => {
    if (!browserSupportsWebAuthn()) {
      alert("WebAuthn is not supported in this browser");
      return;
    }

    const resp = await fetch("http://localhost:5000/auth/start-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
      credentials: "include",
    });

    let attResp;

    try {
      const opts = await resp.json();

      attResp = await startRegistration(opts);
    } catch (error: any) {
      if (error.name === "InvalidStateError") {
        setRegistrationError(
          "Error: Authenticator was probably already registered by user"
        );
      } else {
        setRegistrationError(`Error: ${error.message}`);
      }
      return;
    }

    const verificationResp = await fetch(
      "http://localhost:5000/auth/verify-registration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attResp),
        credentials: "include",
      }
    );

    const verificationJSON = await verificationResp.json();

    if (verificationJSON && verificationJSON.verified) {
      alert("Authenticator registered!");
      setIsRegistered(true);
    } else {
      setRegistrationError(
        `Oh no, something went wrong! Response: ${JSON.stringify(
          verificationJSON
        )}`
      );
    }
  };

  const onRetry = () => {
    setUsername("");
    isRegistered && setIsRegistered(false);
    setRegistrationError(null);
  };

  return {
    username,
    handleUsernameChange,
    onRegister,
    isRegistered,
    registrationError,
    onRetry,
  };
};
