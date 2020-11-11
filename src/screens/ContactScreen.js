import React from "react";
import { Link } from "react-router-dom";

const ContactScreen = () => {
  return (
    <div className="Contact-screen">
      <p className="Header-contact">Connect with me</p>
      <div className="Header-icons">
        <Link to="/" className="Header-link">
          <i className="fas fa-envelope Icons"></i>
        </Link>
        <Link to="/" className="Header-link">
          <i className="fab fa-github-square Icons"></i>
        </Link>
        <Link to="/" className="Header-link">
          <i className="fab fa-linkedin Icons"></i>
        </Link>
        <Link to="/" className="Header-link">
          <i class="fab fa-instagram-square Icons"></i>
        </Link>
        <Link to="/" className="Header-link">
          <i className="fab fa-facebook-square Icons"></i>
        </Link>
        <Link to="/" className="Header-link">
          <i className="fab fa-twitter-square Icons"></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactScreen;
