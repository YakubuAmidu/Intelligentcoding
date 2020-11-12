import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container fluid className="HomeScreen-section">
      <div className="Header-primary">
        <h1 className="Header-primary-main">Welcome to intelligent coding</h1>
        <h4 className="Header-primary-sub">You have made the best choice.</h4>
        <h4 className="Header-primary-sub">
          We start you from beginning to advance and to pro
        </h4>
        <br />
        <h1 className="Header-courses">Courses</h1>
        <br />
        <Row>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
          <Col xs={6}>
            <div className="Header-skills">
              <p className="Skills">React</p>
              <p className="Price">$15</p>
              <Button className="Begin" variant="outline-primary">
                Begin
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomeScreen;
