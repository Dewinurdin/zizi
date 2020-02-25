import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import SushiRollsMenu1 from '../images/sushi_roll1.png';
import SushiRollsMenu2 from '../images/sushi_rolls2.png';

const SushiRolls = () => (
    <Row>
      <Col sm={6}><Image src={SushiRollsMenu1} className="menu" alt={SushiRollsMenu1}/></Col>
      <Col sm={6}><Image src={SushiRollsMenu2} className="menu" alt={SushiRollsMenu2}/></Col>
    </Row>
);

export default SushiRolls;