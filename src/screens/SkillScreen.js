import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

const SkillScreen = () => {
  return (
    <Container className="SkillScreen-section">
      <h1 className="SkillScreenr-title">Courses</h1>
      <br />
      <Row>
        <Col xs={6} className="SkillScreen-primary">
          <div className="SkillScreen-primary-main">
            <p className="Skill html">HTML</p>
            <p className="Price">$15</p>
            <Button className="Begin" variant="outline-primary">
              Begin
            </Button>
          </div>
        </Col>
        <Col xs={6} className="SkillScreen-primary">
          <div className="SkillScreen-primary-main">
            <p className="Skills JavaScript">JAVASCRIPT</p>
            <p className="Price">$15</p>
            <Button className="Begin" variant="outline-primary">
              Begin
            </Button>
          </div>
        </Col>
        <Col xs={6} className="SkillScreen-primary">
          <div className="SkillScreen-primary-main">
            <p className="Skills reactjs">REACTJS</p>
            <p className="Price">$15</p>
            <Button className="Begin" variant="outline-primary">
              Begin
            </Button>
          </div>
        </Col>
        <Col xs={6} className="SkillScreen-primary">
          <div className="SkillScreen-primary-main">
            <p className="Skills reactnative">REACT NATIVE</p>
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
