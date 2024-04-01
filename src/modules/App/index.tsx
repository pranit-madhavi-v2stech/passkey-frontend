import { useSessionStorage } from "../../context/sessionStorage/context";
import AuthenticationRoutes from "../Authentication";
import ApplicationRoutes from "./ApplicationRoutes";

const Application = () => {
  const { state: appState } = useSessionStorage();

  return (
    <>
      {appState?.isLoggedIn ? <ApplicationRoutes /> : <AuthenticationRoutes />}
    </>
  );
};

export default Application;
