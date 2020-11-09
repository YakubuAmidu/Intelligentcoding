import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import ReactJS from "../assets/ReactJS.png";
import ReactNative from "../assets/ReactNative.png";

class CoursesScreen extends Component {
  render() {
    return (
      <div className="Courses_section">
        <p className="Header_title">Courses tutorials</p>
        <Row>
          <Col>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col>
            <div className="LogoBox">
              <img src={ReactNative} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col>
            <div className="LogoBox">
              <img src={ReactNative} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col>
            <div className="LogoBox">
              <img src={ReactJS} alt="img" className="Course_logo" />
              <p className="Begin">
                <Button variant="primary">Begin course</Button>
              </p>
            </div>
          </Col>
          <Col>
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
