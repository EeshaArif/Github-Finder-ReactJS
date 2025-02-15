import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import Alert from "./layouts/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GithubState from "./contexts/github/githubState";
import AlertState from "./contexts/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
