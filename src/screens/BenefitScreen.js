import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BenefitScreen = () => {
  return (
    <Container fluid>
      <p className="Gain">What you will gain</p>
      <Row>
        <Col>
          <div className="Header-gain">
            <p>Build a professional Portfolio Website</p>
            <p>Build a professional Portfolio Website</p>
            <p>Build a professional Portfolio Website</p>
          </div>
        </Col>
        <Col>
          <div className="Header-gain">
            <p>Build a professional Portfolio Website</p>
            <p>Build a professional Portfolio Website</p>
            <p>Build a professional Portfolio Website</p>
          </div>
        </Col>
        <Col>
          <div className="Header-gain">
            <p>Build a professional Portfolio Website</p>
            <p>Build a professional Portfolio Website</p>
            <p>Build a professional Portfolio Website</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BenefitScreen;
