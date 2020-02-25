import React from 'react';
import Container from 'react-bootstrap/Container';

import ramen_img from '../../images/tonkatsu_ramen.png';
import './About.css';

const About = () => (
  <Container className="banner_text section" fluid>
    <h1>Deliciousness jumping into the mouth</h1>
    <p> ZiZi Ramen & Sushi is a family owned business that prides itself on serving quality food. </p>
    <p>Our chefs have worked in the sushi and ramen business for over 10 years. </p>
    <p>After years of experience in Japanese cuisine, ZiZi Ramen & Sushi hopes to bring a taste of Japan in your area. </p>
    <p>Join us in experiencing a new taste that will leave you wanting more! </p>
    <img src={ramen_img} className="ramen-img" alt="Ramen"/>
  </Container>
);

export default About;