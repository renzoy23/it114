// src/components/NavbarComponent.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSS/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {

  const navbarStyle = {
    backgroundColor: '#d3cc5b',
  };

  const navLinkStyle = {
    color: '#000000',
    fontWeight: 'bold',
  };
  
  return (
    <Navbar style={navbarStyle} variant="dark" expand="lg">
      {/* Logo image beside the Navbar.Brand */}
      <Navbar.Brand as={Link} to="/" style={navLinkStyle} className="custom-nav-link">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: '50px', marginRight: '30px', marginLeft: '60px' }}
        />
        Home
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="cus-nav">
          <Nav.Link as={Link} to="/sign-in" style={navLinkStyle} className="custom-nav-link">Sign In</Nav.Link>
          <Nav.Link as={Link} to="/register" style={navLinkStyle} className="custom-nav-link">Register</Nav.Link>
          <Nav.Link as={Link} to="/about-us" style={navLinkStyle} className="custom-nav-link">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
