import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Sidebar from "../../components/Sidebar";

const routes = [
  {
    path: "/settings",
    element: <div>Settings</div>,
  },
  {
    path: "/*",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <div>Not Found!</div>,
  },
];

const ApplicationRoutes = () => {
  return (
    <div className="flex flex-wrap md:flex-row-reverse">
      <Sidebar />
      <div className="w-full h-screen bg-gray-100 md:w-4/5">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      </div>
    </div>
  );
};

export default ApplicationRoutes;
