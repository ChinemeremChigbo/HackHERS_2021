import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config.js";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/map");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className = "login-page-div">
    <div className="login-page">
    <div class="login-card">
      <p className = "login-text">LOGIN</p>
      <br />
      <input className="login-input" placeholder="Email" type="text" onChange={handleEmail} />
      <br />
      <input className="login-input" placeholder="Password" type="password" onChange={handlePassword} />
      <br />
      <button className="login-button-submit" onClick={handleLogin}>
        Login
      </button>
    </div>
    </div>
    </div>
  );
}
