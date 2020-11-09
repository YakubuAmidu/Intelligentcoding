import React from "react";
import "../components/App.css";
import Imageone from "../assets/Imageone.png";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <div className="HomeScreen_section">
      <Header />
      <div className="Header_section">
        <div className="Header_image">
          <img src={Imageone} alt="img" className="Imagetwo" />
        </div>
        <h1 className="Heading_primary">
          <span className="Heading_primary-main">
            Lorem ipsum dolor sit amet, consectetur
          </span>
          <span className="Heading_primary-sub">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HomeScreen;
