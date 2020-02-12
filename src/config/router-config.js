import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

export const pageRoutes = [
  { url: "/", component: Home, dispalyName: "HomeD", exact: true },
  { url: "/login", dispalyName: "LoginD", component: Login }
];
