import React from 'react';
import Container from 'react-bootstrap/Container';

import EntreesAndDessertsMenu from '../images/entrees_desserts.png'

const Entrees = () => (
  <Container>
    <img src={EntreesAndDessertsMenu} className="menu" alt={EntreesAndDessertsMenu}/>
  </Container>
);

export default Entrees;