import React from 'react';
import Card from 'react-bootstrap/Card';

import './MeetTheChef.css';

const MeetTheChef = props => (
    <Card className=" text-center chef-card">
      <Card.Img variant="top" src={props.image} alt="Meet the Chefs"/> 
        <Card.Body>
        <Card.Title>{props.chefName}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
    </Card>
);

export default MeetTheChef;