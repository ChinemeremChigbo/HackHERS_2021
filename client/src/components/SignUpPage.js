import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config.js";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistration = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/login");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="signup-page">
      <p>Sign Up Page</p>
      <br />
      <input placeholder="First Name" type="text" />
      <br />
      <input placeholder="Last Name" type="text" />
      <br />
      <input placeholder="Email" type="text" onChange={handleEmail} />
      <br />
      <input placeholder="Password" type="password" onChange={handlePassword} />
      <br />
      <button className="button-submit" onClick={handleRegistration}>
        Submit
      </button>
    </div>
  );
}
