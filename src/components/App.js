import React, { Component } from "react";
import HomeScreen from "../screens/HomeScreen";
import BenefitScreen from "../screens/BenefitScreen";
import SkillScreen from "../screens/SkillScreen";
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
        <BenefitScreen />
        <hr />
        <SkillScreen />
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
