import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const InfoScreen = () => {
  return (
    <Container fluid className="InfoScreen-section">
      <Row>
        <Col sm={6}>
          <div className="InfoScreen-primary">
            <p className="InfoScreen html">HTML</p>
            <p className="InfoScreen-paragraph">
              HTML stands for Hyper Text Markup Language. HTML is the standard
              markup language for creating Web pages. HTML describes the
              structure of a Web page. HTML consists of a series of elements.
              HTML elements tell the browser how to display the content.
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="InfoScreen-primary">
            <p className="InfoScreen reactnative">REACT NATIVE</p>
            <p className="InfoScreen-paragraph">
              React Native is a popular JavaScript-based mobile app framework
              that allows you to build natively-rendered mobile apps for iOS and
              Android. It provides a slick, smooth and responsive user
              interface, while significantly reducing load time
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="InfoScreen-primary">
            <p className="InfoScreen bootstrap">JASCRIPT</p>
            <p className="InfoScreen-paragraph">
              JavaScript is a text-based programming language used both on the
              client-side and server-side that allows you to make web pages
              interactive. JavaScript can update and change both HTML and CSS.
              JavaScript can calculate, manipulate and validate data.
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="InfoScreen-primary">
            <p className="InfoScreen flexbox">REACT</p>
            <p className="InfoScreen-paragraph">
              React. js is an open-source JavaScript library that is used for
              building user interfaces specifically for single-page
              applications. React is a User Interface UI library. React is a
              tool for building UI components. React is a tools used to build
              both android and IOS applications.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoScreen;
