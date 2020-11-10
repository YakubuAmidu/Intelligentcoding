import React, { Component } from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="sm">
          <Navbar.Brand href="#home">
            <div className="Link Link_tailor">
              {" "}
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
                <Link to="/ProductScreen" className="Link Link_header">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link to="/ServicesScreen" className="Link Link_header">
                  Cotact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
