import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container fluid className="HomeScreen-section">
      <div className="HomeScreen-primary">
        <h1 className="HomeScreen-primary-main">
          Welcome to intelligent coding
        </h1>
        <h4 className="Header-primary-sub">You have made the best choice.</h4>
        <h4 className="HomeScreen-primary-sub">
          We start you from beginning to advance and to pro
        </h4>
      </div>

      <Container>
        <Row>
          <Col>
            <div className="HomeScreen-course-main">
              <i class="fas fa-globe iconone"></i>
              <div className="HomeScreen-course-sub">Web Development</div>
            </div>
          </Col>
          <Col>
            <div className="HomeScreen-course-main">
              <i class="fas fa-mobile-alt iconone"></i>
              <div className="HomeScreen-course-sub">
                Mobile app Development
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeScreen;
