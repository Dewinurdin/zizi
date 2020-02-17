import React from 'react';
import Nav from 'react-bootstrap/Nav';

import Logo from '../../images/zizi_logo.png';

import './Footer.css';


const Footer = () => (
  <>
    <Nav justify className="justify-content-center">
      <Nav.Item>
          <p className="footer-title">Contact Us</p>
          <p className="footer-subtitle">9711 Plano Rd</p>
          <p className="footer-subtitle">Dallas, TX 75238</p>
          <p className="footer-subtitle">Phone: (469) 346-8334 </p>
        </Nav.Item>
        <Nav.Item>
          <p>
            <img src={Logo} className="d-inline-block align-top zizi-logo" alt="zizi logo" /> 
          </p>
        </Nav.Item>
        <Nav.Item>
          <p className="footer-title">Opening Hours</p>
          <p className="footer-subtitle">Sunday - Thursday: 11 am - 9:30 pm </p>
          <p className="footer-subtitle">Friday & Saturday: 11 am - 10 pm </p>
        </Nav.Item>
      </Nav>  
    </>
);

export default Footer;

