import React from 'react';
import Container from 'react-bootstrap/Container';

import NoodleAndRiceMenu from '../images/rice_noodles.png'

const NoodleRice = () => (
  <Container>
    <img src={NoodleAndRiceMenu} className="menu" alt={NoodleAndRiceMenu}/>
  </Container>
);

export default NoodleRice;