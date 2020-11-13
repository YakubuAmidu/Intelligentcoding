import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

const SkillScreen = () => {
  return (
    <Container className="Skills-section">
      <h1 className="Header-title">Courses</h1>
      <br />
      <Row>
        <Col xs={6}>
          <div className="Header-skills">
            <p className="Skills">HTML</p>
            <p className="Price">$15</p>
            <Button className="Begin" variant="outline-primary">
              Begin
            </Button>
          </div>
        </Col>
        <Col xs={6}>
          <div className="Header-skills">
            <p className="Skills">JAVASCRIPT</p>
            <p className="Price">$15</p>
            <Button className="Begin" variant="outline-primary">
              Begin
            </Button>
          </div>
        </Col>
        <Col xs={6}>
          <div className="Header-skills">
            <p className="Skills">REACTJS</p>
            <p className="Price">$15</p>
            <Button className="Begin" variant="outline-primary">
              Begin
            </Button>
          </div>
        </Col>
        <Col xs={6}>
          <div className="Header-skills">
            <p className="Skills">REACT NATIVE</p>
            <p className="Price">$15</p>
            <Button className="Begin" variant="outline-primary">
              Begin
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillScreen;
