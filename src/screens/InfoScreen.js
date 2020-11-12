import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const InfoScreen = () => {
  return (
    <Container fluid className="InfoScreen-section">
      <Row>
        <Col sm={6}>
          <div className="Info-icons">
            <p className="Icons html">HTML</p>
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
            <p className="Icons css">CSS</p>
            <p className="Info-paragraph">
              CSS stands for Cascading Style Sheets with an emphasis placed on
              “Style.” While HTML is used to structure a web document (defining
              things like headlines and paragraphs, and allowing you to embed
              images, video, and other media), CSS comes through and specifies
              your document’s style—page layouts, colors, and fonts are all
              determined with CSS.
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="Info-icons">
            <p className="Icons bootstrap">BOOTSTRAP</p>
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
            <p className="Icons flexbox">FLEXBOX</p>
            <p className="Info-paragraph">
              Flexbox is a layout model that allows elements to align and
              distribute space within a container. Using flexible widths and
              heights, elements can be aligned to fill a space or distribute
              space between elements, which makes it a great tool to use for
              responsive design systems
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoScreen;
