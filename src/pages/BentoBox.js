import React from 'react';
import Container from 'react-bootstrap/Container';

import BentoBoxMenu from '../images/bento_box.png'

const BentoBox = () => (
  <Container>
    <img src={BentoBoxMenu} className="menu" alt={BentoBoxMenu}/>;
  </Container>
); 

export default BentoBox;