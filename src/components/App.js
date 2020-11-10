import React, { Component } from "react";
import "./App.css";
import HomeScreen from "../screens/HomeScreen";
// import CoursesScreen from "../screens/CoursesScreen";

class App extends Component {
  render() {
    return (
      <div>
        <HomeScreen />
        <hr />
      </div>
    );
  }
}

export default App;
