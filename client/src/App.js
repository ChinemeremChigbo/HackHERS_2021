import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import MapPage from "./components/MapPage";
import GlassCeilingPage from "./components/GlassCeilingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/map" component={MapPage} />
          <Route path="/glassceiling" component={GlassCeilingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
