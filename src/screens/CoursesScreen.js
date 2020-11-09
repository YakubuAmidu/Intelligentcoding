import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import ReactJS from "../assets/ReactJS.png";
import ReactNative from "../assets/ReactNative.png";

class CoursesScreen extends Component {
  render() {
    return (
      <div className="Courses_section">
        <Row>
          <Col>
            <div className="Header_courses">
              <img src={ReactJS} alt="img" className="Course_logo" />
            </div>
          </Col>
          <Col>
            <div className="Header_courses">
              <img src={ReactNative} alt="img" className="Course_logo" />
            </div>
          </Col>
          <Col>
            <div className="Header_courses">
              <img src={ReactJS} alt="img" className="Course_logo" />
            </div>
          </Col>
          <Col>
            <div className="Header_courses">
              <img src={ReactJS} alt="img" className="Course_logo" />
            </div>
          </Col>
          <Col>
            <div className="Header_courses">
              <img src={ReactJS} alt="img" className="Course_logo" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CoursesScreen;
