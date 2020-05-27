import React, { Component } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Users />
      </div>
    );
  }
}

export default App;
