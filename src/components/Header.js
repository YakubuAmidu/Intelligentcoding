import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar expand="sm">
        <Navbar.Brand href="#home">
          <div className="Link Link_tailor">
            <i class="fas fa-laptop-code"></i> INTELIGENT-CODING
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/#" className="Link Link_header">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/CoursesScreen" className="Link Link_header">
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/ServicesScreen" className="Link Link_header">
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/BlogScreen" className="Link Link_header">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
