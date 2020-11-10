import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "../components/App.css";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <div className="HomeScreen_section">
      <Header />
      <div className="Header_primary">
        <h1>Hellooo! Welcome to Intelligent-coding</h1>
        <h4>
          Start from beginning to advance. You guaranteed to become a pro.
        </h4>
      </div>

      <div>
        <h1>Courses</h1>
        <Row>
          <Col>
            <div>
              <p>React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div>
              <p>React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div>
              <p>React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div>
              <p>React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <p>React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div>
              <p>React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div>
              <p>React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
          <Col>
            <div>
              <p>React native</p>
              <Button>Begin course</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeScreen;
