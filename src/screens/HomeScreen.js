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
          <img src={Imageone} alt="img" className="Imagetone" />
        </div>

        <div className="Heading_primary">
          <p className="Heading_primary-main">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>
          <p className="Heading_primary-sub">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </p>
        </div>

        <div className="Heading_secondary">
          <p className="Heading_secondary-main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <button>Start</button>
      </div>
    </div>
  );
};

export default HomeScreen;
