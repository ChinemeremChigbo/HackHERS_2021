import React from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import growth from "../assets/img/growth.svg"

const useStyles = makeStyles((theme) => ({
  MuiButtonContained: {
    backgroundColor: "#111B47",
    color: "#FFFFFF",
    textTransform: "capitalize",
    width: 190,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 50,
    marginTop: 50,
    "&:hover": {
      backgroundColor: "#D6DCF5",
      color: "#111B47",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleSignup = () => {
    history.push("/signup");
  };

  return (
    <div>
      <div className="landingpage-container">
        <div className="landingpage-content">
          <div className="landingpage-main-heading">
            Giving a voice to the voiceless
          </div>
          <div className="landingpage-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </div>
          <div className="landingpage-buttons">
            <Button
              variant="contained"
              className={classes.MuiButtonContained}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              className={classes.MuiButtonContained}
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="our-mission-container">
        <div className="our-mission-content">
        <div>Our Mission</div>
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </div>
        </div>

        <div><img src={growth}/></div>
      </div>
    </div>
  );
};

export default LandingPage;
