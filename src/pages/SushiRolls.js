import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SushiRollsMenu1 from '../images/sushi_rolls.png';
import SushiRollsMenu2 from '../images/sushi_rolls2.png';

const SushiRolls = () => (
  <Container>
    <Row>
      <Col><img src={SushiRollsMenu1} className="menu" alt={SushiRollsMenu1}/></Col>
      <Col><img src={SushiRollsMenu2} className="menu" alt={SushiRollsMenu2}/></Col>
    </Row>
  </Container>
);

export default SushiRolls;