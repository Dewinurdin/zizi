import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';

class NavBar extends React.Component {
  render () {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          <img
          src={logo}
          className="d-inline-block align-top zizi-logo"
          alt="zizi logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-menu" href="#menu" style={{paddingRight: '20%'}}> Menu</Nav.Link>
            <Nav.Link className="nav-menu" href="#gallery" style={{paddingRight: '20%'}}> Gallery</Nav.Link>
            <Nav.Link className="nav-menu" href="#location">Visit Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    )
  }
};


export default NavBar;