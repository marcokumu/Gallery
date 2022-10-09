import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../appStyles.module.css";

function Navbar({ onLogoutClick, user }) {
  const navigate = useNavigate();

  return (
    <div>
      {user ? (
        <div className={styles.nav_bar}>
          <button className={styles.nav_button} onClick={onLogoutClick}>
            logout
          </button>
          <NavLink
            className={styles.nav_link}
            style={{ textDecoration: "none" }}
            to="/galleries"
          >
            Galleries
          </NavLink>
          <NavLink
            className={styles.nav_link}
            style={{ textDecoration: "none" }}
            to="/profile"
          >
            Profile
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
