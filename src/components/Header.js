import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar expand="sm">
        <Navbar.Brand href="#home">
          <div className="Link Link-tailor">
            <i class="fas fa-laptop-code"></i> INTELIGENT-CODING
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/#" className="Link Link-header">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/CoursesScreen" className="Link Link-header">
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/ServicesScreen" className="Link Link-header">
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="#home">
              <Link to="/BlogScreen" className="Link Link-header">
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
