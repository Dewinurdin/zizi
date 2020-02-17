import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import logo from '../images/logo.png';

import './NavBar.css';

class NavBar extends React.Component {
  render () {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          {/* <img
          src={logo}
          className="d-inline-block align-top zizi-logo"
          alt="zizi logo"
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <Nav.Link className="" href="#menu"> Menu</Nav.Link>
            <Nav.Link className="" href="#gallery"> Gallery</Nav.Link>
            <Nav.Link className="" href="#location">Visit Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  }
};


export default NavBar;