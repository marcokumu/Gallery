import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../appStyles.module.css";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate("/galleries");
      } else {
        r.json().then((err) => console.log(err.errors));
        alert(
          "The username and/or password you have entered is incorrect. Please try again."
        );
      }
    });
  }

  return (
    <div className={styles.bg1}>
      <div className={styles.wrapper_log}>
        <h2 className={styles.title_name}>Login Here</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.form_field}>
            <label>
              {"Username: "}
              <input
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
            </label>
          </div>
          <div className={styles.form_field}>
            <label>
              {"Password: "}
              <input
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <br />
          <button className={styles.login_button} type="submit">
            Login
          </button>
        </form>
        <br />
        <p>New to Art Gallery? Sign up here!</p>
        <button className={styles.login_button} onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
