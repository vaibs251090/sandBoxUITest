import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { pageRoutes } from "./config/router-config";

export default function App() {
  return (
    <div className="App">
      <Switch>
        {pageRoutes.map(function(oneRoute) {
          return (
            <Route
              path={oneRoute.url}
              component={oneRoute.component}
              exact={oneRoute.exact}
            />
          );
        })}
      </Switch>
    </div>
  );
}
