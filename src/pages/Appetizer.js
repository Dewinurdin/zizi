import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import AppetizerMenu from '../images/appetizer.png'

const Appetizer = () => (
  <Container>
    <Image src={AppetizerMenu} className="menu" alt={AppetizerMenu} fluid/>
  </Container>
);

export default Appetizer;