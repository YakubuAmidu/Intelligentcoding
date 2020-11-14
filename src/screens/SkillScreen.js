import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

const SkillScreen = () => {
  return (
    <Container fluid className="SkillScreen-section">
      <Container>
        <h1 className="SkillScreen-title">Courses</h1>
        <Row>
          <Col xs={6} className="SkillScreen-primary">
            <div className="SkillScreen-primary-main">
              <p className="Skill">HTML</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6} className="SkillScreen-primary">
            <div className="SkillScreen-primary-main">
              <p className="Skill">JAVASCRIPT</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6} className="SkillScreen-primary">
            <div className="SkillScreen-primary-main">
              <p className="Skill">REACTJS</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6} className="SkillScreen-primary">
            <div className="SkillScreen-primary-main">
              <p className="Skill">REACT NATIVE</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SkillScreen;
