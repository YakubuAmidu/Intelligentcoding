import React from "react";
import { Button } from "react-bootstrap";
import "../components/App.css";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <div className="HomeScreen_section">
      <Header />

      <div className="Header_primary">
        <p className="Header_primary-main">
          Helloo! Welcome to intelligent coding.
        </p>
        <p className="Header_secondary-main">
          This is the best place to learn. Here you will find the best resources
          to become a software engineer as soon as possible. We start you from
          beginning to advance. It easy to use resources. Feel free to browse
          around.
        </p>

        <Button variant="outline-light" className="Started">
          LET GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
