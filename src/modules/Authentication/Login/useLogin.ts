import { startAuthentication } from "@simplewebauthn/browser";
import { useState } from "react";
import { useSessionStorage } from "../../../context/sessionStorage/context";

export const useLogin = () => {
  const [username, setUsername] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // const {dispatch: dispatchAppAction} = useAppState();
  const { dispatch: dispatchSessionStorage } = useSessionStorage();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    errorMessage && setErrorMessage(null);
  };

  const handleLogin = async () => {
    const resp = await fetch(
      "http://localhost:5000/auth/start-authentication",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
        credentials: "include",
      }
    );

    let asseResp;
    try {
      const opts = await resp.json();
      if (opts.message === "User not found") {
        setErrorMessage(opts.message);
        return;
      }
      asseResp = await startAuthentication(opts);
    } catch (error: any) {
      setErrorMessage(error.message);
      return;
    }

    const verificationResp = await fetch(
      "http://localhost:5000/auth/verify-authentication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(asseResp),
        credentials: "include",
      }
    );

    const verificationJSON = await verificationResp.json();

    if (verificationJSON && verificationJSON.verified) {
      dispatchSessionStorage({
        type: "SET_SESSION_VALUE",
        payload: {
          key: "isLoggedIn",
          value: "true",
        },
      });
    } else {
      setErrorMessage(`${verificationJSON?.error}`);
      console.error(verificationJSON);
    }
  };

  return {
    errorMessage,
    username,
    handleUsernameChange,
    handleLogin,
  };
};
