import React, { Component } from "react";
import "./App.css";
import Navbar from "./layouts/Navbar";
import UserItems from "./components/users/UserItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <UserItems />
      </div>
    );
  }
}

export default App;
