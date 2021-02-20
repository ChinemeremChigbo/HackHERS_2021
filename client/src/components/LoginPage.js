import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config.js";

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
    <div className="login-page">
      <p>Login Page</p>
      <br />
      <input placeholder="Email" type="text" onChange={handleEmail} />
      <br />
      <input placeholder="Password" type="password" onChange={handlePassword} />
      <br />
      <button className="button-login" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
