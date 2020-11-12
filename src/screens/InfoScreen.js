import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const InfoScreen = () => {
  return (
    <Container fluid className="InfoScreen-section">
      <h1>InfoScreen</h1>
      <Row>
        <Col sm={6}>
          <div className="Info-icons">
            <i className="Icons" class="fab fa-html5"></i>
            <p className="Info-paragraph">
              HTML stands for Hyper Text Markup Language. HTML is the standard
              markup language for creating Web pages. HTML describes the
              structure of a Web page. HTML consists of a series of elements.
              HTML elements tell the browser how to display the content.
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="Info-icons">
            <i className="Icons" class="fab fa-bootstrap"></i>
            <p className="Info-paragraph">
              What is Bootstrap? Bootstrap is a potent front-end framework used
              to create modern websites and web apps. It's open-source and free
              to use, yet features numerous HTML and CSS templates for UI
              interface elements such as buttons and forms. Bootstrap also
              supports JavaScript extensions.
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="Info-icons">
            <i className="Icons" class="fab fa-bootstrap"></i>
            <p className="Info-paragraph">
              HTML stands for Hyper Text Markup Language. HTML is the standard
              markup language for creating Web pages. HTML describes the
              structure of a Web page. HTML consists of a series of elements.
              HTML elements tell the browser how to display the content.
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="Info-icons">
            <i className="Icons" class="fab fa-bootstrap"></i>
            <p className="Info-paragraph">
              HTML stands for Hyper Text Markup Language. HTML is the standard
              markup language for creating Web pages. HTML describes the
              structure of a Web page. HTML consists of a series of elements.
              HTML elements tell the browser how to display the content.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoScreen;
