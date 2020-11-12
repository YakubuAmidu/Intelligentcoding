import React, { Component } from "react";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import InfoScreen from "../screens/InfoScreen";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeScreen />
        <hr />
        <InfoScreen />
        <hr />
        <AboutScreen />
        <hr />
        <ContactScreen />
      </div>
    );
  }
}

export default App;
