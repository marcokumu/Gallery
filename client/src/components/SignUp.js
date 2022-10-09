import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../appStyles.module.css";

function SignUp({ onSignup }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirmation, setPassConfirmation] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passConfirmation,
        image_url: profilePic,
        bio,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onSignup(user));
        navigate("/galleries");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <div className={styles.bg2}>
        <div className={styles.wrapper_su}>
          <button className={styles.button_2} onClick={() => navigate("/")}>
            back to login
          </button>
          <h2 className={styles.title_name}>Sign Up</h2>
          {/* <p style={{ fontSize: "22px" }}>
            Create an account so you can share your creations with the world!
          </p> */}

          <form onSubmit={handleSubmit}>
            <div className={styles.inner_wrapper}>
              <div className={styles.form_field}>
                <label>
                  {"Create a username: "}
                  <input
                    placeholder="enter username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                <p style={{ color: "#ffffff" }}>
                  username must be between 6 and 15 characters
                </p>
              </div>
              <div className={styles.form_field}>
                <label>
                  {"Create a password: "}
                  <input
                    placeholder="enter password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className={styles.form_field}>
                <label>
                  {"Confirm Password: "}
                  <input
                    placeholder="confirm password"
                    type="password"
                    value={passConfirmation}
                    onChange={(e) => setPassConfirmation(e.target.value)}
                  />
                </label>
                <p style={{ color: "#ffffff" }}>
                  Password must be between 8 and 20 characters
                </p>
              </div>
            </div>
            <div className={styles.form_field}>
              <label>
                {"Add a bio: "}
                <textarea
                  className={styles.lg_input_field}
                  placeholder="Bios aren't necessary, however, it doesn't hurt to let fellow creators know things like your art background and what mediums you use! Your bio can't exceed 500 characters"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                {"Add a Profile Picture: "}
                <input
                  placeholder="enter picture"
                  type="text"
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                />
              </label>
            </div>
            <br />
            <button className={styles.button} type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <div className={styles.errors_su}>
          {errors.map((err) => {
            return <p key={err}>{err}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default SignUp;
