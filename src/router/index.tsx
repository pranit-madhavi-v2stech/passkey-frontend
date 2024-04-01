import { BrowserRouter } from "react-router-dom";
import Application from "../modules/App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  );
};

export default AppRouter;
