import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../components/App.css";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <div className="HomeScreen_section">
      <Header />
      <div className="Header-primary">
        <h1 className="Header-main">Hellooo! Welcome to Intelligent-coding</h1>
        <h4 className="Header-sub">
          Start from beginning to advance. You guaranteed to become a pro.
        </h4>
      </div>

      <div>
        <h1 className="Header-course">Courses</h1>
        <Row>
          <Col>
            <div className="Skills">
              <p className="Html">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills">
              <p className="Css">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills">
              <p className="Grid">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills">
              <p className="Flexbox">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Skills">
              <p className="Sass">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills">
              <p className="Bootstrap">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills">
              <p className="Reactjs">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills">
              <p className="Reactnative">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeScreen;
