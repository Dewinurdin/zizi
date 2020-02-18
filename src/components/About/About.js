import React from 'react';
import Container from 'react-bootstrap/Container';

import ramen_img from '../../images/tonkatsu_ramen.png';
import './About.css';

const About = () => (
  <Container className="banner_text section" fluid>
    <h5>ZiZi Ramen & Sushi</h5>
    <h1>Deliciousness jumping into the mouth</h1>
    <p> Write Something about Zizi. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <img src={ramen_img} className="ramen-img" alt="Ramen"/>
  </Container>
);

export default About;