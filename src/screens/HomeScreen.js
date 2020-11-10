import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "../components/App.css";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <Container fluid className="HomeScreen_section">
      <Header />
      <div className="Header-primary">
        <h1 className="Header-main">Hellooo! Welcome to Intelligent-coding</h1>
        <h4 className="Header-sub">
          Start from beginning to advance. You guaranteed to become a pro.
        </h4>
      </div>
      <hr />
      <div className="Header-secondary">
        <h1 className="Header-course">COURSES</h1>
        <Row>
          <Col>
            <div className="Skills-title">
              <p className="Skills Html">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills-title">
              <p className="Skills Css">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills-title">
              <p className="Skills Grid">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills-title">
              <p className="Skills Flexbox">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="Skills-title">
              <p className="Skills Sass">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills-title">
              <p className="Skills Bootstrap">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills-title">
              <p className="Skills Reactjs">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div className="Skills-title">
              <p className="Skills Reactnative">React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomeScreen;
