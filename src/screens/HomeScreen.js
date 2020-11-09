import React from "react";
import { Button } from "react-bootstrap";
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

        <div className="Text_box">
          <div className="Heading_primary">
            <p className="Heading_primary-main">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </p>
          </div>

          <div className="Heading_secondary">
            <p className="Heading_secondary-main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
          </div>
        </div>

        <Button variant="outline-light">Find out more</Button>
      </div>
    </div>
  );
};

export default HomeScreen;
