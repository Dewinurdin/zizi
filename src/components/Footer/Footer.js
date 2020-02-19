import React from 'react';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Nav';
// import Nav from 'react-bootstrap/Nav';

import Logo from '../../images/zizi_logo.png';

import './Footer.css'; 

const d = new Date();
const getYear = d.getFullYear();


const Footer = () => (
  <footer className="footer">
    <Row>
      <Col xs={12} sm={4}>
        <img src={Logo} className="zizi-logo" alt="zizi logo" /> 
        <p className="copyright ml-auto">&#169; Copyright {getYear} ZiZi Ramen &amp; Sushi</p>
      </Col>
      <Col xs={12} sm={4} className="footer-col">
        <p className="footer-title">Contact Us</p>
        <p className="footer-subtitle">9711 Plano Rd</p>
        <p className="footer-subtitle">Dallas, TX 75238</p>
        <p className="footer-subtitle">Phone: (469) 346-8334 </p>
      </Col>
      <Col xs={12} sm={4} className="footer-col">
        <p className="footer-title">Opening Hours</p>
        <p className="footer-subtitle">Sunday - Thursday: 11 am - 9:30 pm </p>
        <p className="footer-subtitle">Friday &amp; Saturday: 11 am - 10 pm </p>
      </Col>
      <Col xs={4} sm={12} className="dev">
        <span className="developer">Designed &amp; Maintain by <a href=' https://portfolio-dewi.herokuapp.com/' className="dn" target='_blank'>Dewi Nurdin</a></span>
      </Col>

    </Row>

  
  </footer>
);

export default Footer;