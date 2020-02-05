import React from 'react';
import Container from 'react-bootstrap/Container';

import SushiSashimiMenu from '../images/sushisashimi.png'

const SushiSashimi = () => (
  <Container>
    <img src={SushiSashimiMenu} className="menu" alt={SushiSashimiMenu}/>
  </Container>
);

export default SushiSashimi;