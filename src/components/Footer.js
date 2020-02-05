import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => (
  <>
    <Navbar bg="light" variant="light" sticky="bottom">
      <Navbar.Brand href="#home">BRAND</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Opening Hours </Nav.Link>
        <Nav.Link href="#features">Contact ss</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>  
  </>
);

export default Footer;

