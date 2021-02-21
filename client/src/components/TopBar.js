import React from "react";
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
    color: "white",
    textDecoration: "none",
    paddingLeft: 10,
  },
}));
const TopBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
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
