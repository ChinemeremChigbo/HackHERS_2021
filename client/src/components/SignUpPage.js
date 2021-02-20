import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../config.js";
import "./SignUpPage.css";

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
    <div className="sign-up-page-div">
      <div className="sign-up-page">
      <div class="card">
      <p className = "sign-up-text"> SIGN UP</p>
      <br />
      <input className="sign-up-input" placeholder="First Name" type="text" />
      <br />
      <input className="sign-up-input" placeholder="Last Name" type="text" />
      <br />
      <input className="sign-up-input" placeholder="Email" type="text" onChange={handleEmail} />
      <br />
      <input className="sign-up-input" placeholder="Password" type="password" onChange={handlePassword} />
      <br />
      <div className="sign-up-bottom-info">
              Already have an account?{" "}
              <Link style={{textDecoration: 'none', color: '#701000'}} to="/login">Log in</Link>
            </div>
      <button className="sign-up-button-submit" onClick={handleRegistration}>
        Submit
      </button>

      </div>
      </div>
    </div>
  );
}
