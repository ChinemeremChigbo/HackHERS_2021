import React, { useState, useEffect } from "react";
import firebase from "../config";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 999,
    backgroundColor: "#111B47",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexGrow: 999,
  },
  navlink: {
    fontWeight: 700,
    color: "white",
    textDecoration: "none",
    paddingLeft: 20,
  },
}));
const handleLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
const TopBar = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const classes = useStyles();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      setLoggedIn(false);
      console.log("not loggin in");
      // User is signed out
      // ...
    }
  });
  return (
    <AppBar position="fixed" color="primary" style={{ elevation: 1000 }}>
      <Toolbar className={classes.root}>
        <div className={classes.root}>
          <NavLink to="/" className={classes.navlink}>
            <Typography variant="h5">Amplify</Typography>
          </NavLink>
        </div>
        <div className={classes.middle}>
          <NavLink to="/map" className={classes.navlink}>
            <Typography variant="body1">Map</Typography>
          </NavLink>
          <NavLink to="/glassceiling" className={classes.navlink}>
            <Typography variant="body1">Glass Ceiling</Typography>
          </NavLink>
        </div>
        {loggedIn ? (
          <div className={classes.root}>
            <Button color="inherit" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        ) : (
          <div className={classes.root}>
            <NavLink to="/login" className={classes.navlink}>
              <Typography variant="body1">Login</Typography>
            </NavLink>
            <NavLink to="/signup" className={classes.navlink}>
              <Typography variant="body1">Sign Up</Typography>
            </NavLink>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
