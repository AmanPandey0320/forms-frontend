import Home from "./web/pages/home/index";
import Dashboard from "./web/pages/dashboard";
import Form from "./web/pages/form";

export const Routes = [
  {
    id: 1,
    to: "/",
    child: Home,
    exact: true,
  },
  {
    id: 2,
    to: "/dashboard",
    child: Dashboard,
    exact: true,
  },
  {
    id: 3,
    to: "/form/:fid",
    child: Form,
    exact: true,
  },
];
