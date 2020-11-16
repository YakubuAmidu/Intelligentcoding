import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BenefitScreen = () => {
  return (
    <Container fluid className="BenefitScreen-section">
      <h1 className="BenefitScreen-primary-title">What you will benefit</h1>
      <Container fluid className="BenefitScreen-primary">
        <Row>
          <Col sm={6}>
            <div className="BenefitScreen-primary-main">
              <i class="fas fa-gem"></i>
              <h5 className="BenefitScreen-title-main">
                Fundamental principles of web Development
              </h5>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Gain skills to apply for jobs in
                web development.
              </p>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Build real project to show your
                skills to employers.
              </p>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> You will be able to build modern
                websites.
              </p>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Learn best practices to write clean
                code.
              </p>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Master fundamental concepts in Web
                Development.
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <div className="BenefitScreen-primary-main">
              <i class="fas fa-gem"></i>
              <h5 className="BenefitScreen-title-main">
                Fundamental principles of mobile app Development
              </h5>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Build real app project with react
                native.
              </p>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Understand the difference between
                state, and props.
              </p>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Develop apps that are unique, fun,
                and responsive.
              </p>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Master the process of using
                component to build UIs.
              </p>
              <p className="BenefitScreen-primary-sub">
                <i class="fas fa-check"></i> Build on both Android and iOS
                platforms.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BenefitScreen;
