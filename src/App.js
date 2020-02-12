import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { pageRoutes } from "./config/router-config";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {pageRoutes.map(function(oneRoute) {
          return (
            <Route
              path={oneRoute.url}
              key={oneRoute.url}
              component={oneRoute.component}
              exact={oneRoute.exact}
            />
          );
        })}
      </Switch>
    </div>
  );
}
