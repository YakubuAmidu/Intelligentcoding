import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import ReactJS from "../assets/ReactJS.png";
import ReactNative from "../assets/ReactNative.png";
import ReactBootstrap from "../assets/ReactBootstrap.png";
import Flexbox from "../assets/Flexbox.png";

class CoursesScreen extends Component {
  render() {
    return (
      <div className="Courses_section">
        <p className="Header_title">Courses</p>
        <Row>
          <Col xs={6} md={3}>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="LogoBox">
              <img src={ReactNative} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="LogoBox">
              <img src={ReactBootstrap} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="LogoBox">
              <img src={Flexbox} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="LogoBox">
              <img src={ReactNative} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CoursesScreen;
