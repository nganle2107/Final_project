import React from "react";
import "./styles.css";
import Datlich from "./datlich.js";
import Xemlich from "./xemlich.js";
import Navbar from "./navbar.js";
import Home from "./home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/maingallery">
              <Home />
            </Route>
            <Route path="/explore">
              <Home />
            </Route>
            <Route path="/user">
              <Home />
            </Route>
            <Route path="/xemlich">
              <Xemlich />
            </Route>
            <Route path="/datlich">
              <Datlich />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}
