import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

const SkillScreen = () => {
  return (
    <Container fluid className="SkillScreen-section">
      <h1 className="SkillScreen-title">Pursuit your goals</h1>
      <Container fluid className="SkillScreen-primary">
        <Row>
          <Col sm={6}>
            <div className="SkillScreen-primary-main">
              <div className="SkillScreen-primary-sub">
                <p className="SkillScreen-paragraph">
                  html, css, grid, flexbox
                </p>
                <Button variant="outline-dark" className="Begin">
                  Begin
                </Button>
              </div>
              <div className="SkillScreen-primary-sub">
                <p className="SkillScreen-paragraph">ReactJS</p>
                <Button variant="outline-dark" className="Begin">
                  Begin
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={6} className="SkillScreen-primary">
            <div className="SkillScreen-primary-main">
              <div className="SkillScreen-primary-sub">
                <p className="SkillScreen-paragraph">Javascript</p>
                <Button variant="outline-dark" className="Begin">
                  Begin
                </Button>
              </div>
              <div className="SkillScreen-primary-sub">
                <p className="SkillScreen-paragraph">React native</p>
                <Button variant="outline-dark" className="Begin">
                  Begin
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SkillScreen;
