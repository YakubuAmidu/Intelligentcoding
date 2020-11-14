import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BenefitScreen = () => {
  return (
    <Container fluid className="BenefitScreen-section">
      <p className="Benefit">What you will benefit</p>
      <Container className="Benefit-container">
        <Row>
          <Col>
            <div className="Header-benefit">
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
            </div>
          </Col>
          <Col>
            <div className="Header-gain">
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
              <p className="Benefit-paragraph">
                Build a professional Portfolio Website
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BenefitScreen;
