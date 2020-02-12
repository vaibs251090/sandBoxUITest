import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

export const pageRoutes = [
  { url: "/", component: Home, exact: true },
  { url: "/login", component: Login }
];
