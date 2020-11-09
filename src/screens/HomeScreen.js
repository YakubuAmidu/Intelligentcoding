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
          This is the right place to learn. Here you will find the best
          resources to become a software engineer. We start you from beginning
          to advance. It easy to use resources. Feel free to browse around.
        </p>

        <Button variant="outline-light">Let get started</Button>
      </div>
    </div>
  );
};

export default HomeScreen;
