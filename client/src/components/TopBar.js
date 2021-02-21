import React from "react";
import logo from "../assets/img/logo.svg";

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
  logo: {
    fontWeight: 700,
    color: "white",
    textDecoration: "none",
    paddingLeft: 20,
    marginTop:3,
  }
}));
const TopBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary" style={{ elevation: 1000 }}>
      <Toolbar className={classes.root}>
        <div className={classes.root}>
          <NavLink to="/" className={classes.logo}>
            <img src={logo}/>
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
        <div className={classes.root}>
          <NavLink to="/login" className={classes.navlink}>
            <Typography variant="body1">Login</Typography>
          </NavLink>
          <NavLink to="/signup" className={classes.navlink}>
            <Typography variant="body1">Sign Up</Typography>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
