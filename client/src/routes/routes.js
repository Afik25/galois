import MainLayout from "../MainLayout";
import PersistLogin from "../hooks/context/hooks/PersistLogin";
import RequireAuth from "../hooks/context/hooks/RequireAuth";
//
// pages
import Home from "../pages/home/Home";
import Organization from "../pages/organization/Organization";

// Control
import NotFound from "../pages/others/404";
import Unauthorized from "../pages/others/Unauthorized";

const ROLES = {
  root: "root",
  admin: "admin",
  user: "user",
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/organization", element: <Organization /> },
      
      { path: "*", element: <NotFound /> },
      { path: "/unauthorized", element: <Unauthorized /> },
    ],
  },
];
