import Home from "./web/pages/home/index";
import Dashboard from "./web/pages/dashboard";
import Form from "./web/pages/form";
import Responder from "./web/pages/response";

export const Routes = [
  {
    id: 1,
    to: "/form-app",
    child: Home,
    exact: true,
  },
  {
    id: 2,
    to: "/form-app/dashboard",
    child: Dashboard,
    exact: true,
  },
  {
    id: 3,
    to: "/form-app/form/:fid",
    child: Form,
    exact: true,
  },
  {
    id: 4,
    to: "/form-app/response/submit/:fid",
    child: Responder,
    exact: true,
  },
];
