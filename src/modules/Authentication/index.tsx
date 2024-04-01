import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Registration";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>Not Found!</div>,
  },
];

const AuthenticationRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AuthenticationRoutes;
