import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SushiRolls = () => (
  <Container>
    <Row>
      <Col className="menu sushiroll"></Col>
      <Col className="menu sushiroll2"></Col>
    </Row>
  </Container>
);

export default SushiRolls;