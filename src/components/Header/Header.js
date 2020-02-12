import React from "react";
import { pageRoutes } from "../../config/router-config";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.Header}>
    <ul>
      {pageRoutes.map(function(oneRoute) {
        //console.log(oneRoute);
        return (
          <li key={oneRoute.dispalyName}>
            <Link to={oneRoute.url}>{oneRoute.dispalyName}</Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Header;
