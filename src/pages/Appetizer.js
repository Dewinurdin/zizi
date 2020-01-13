import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import takoyaki from '../images/takoyaki.jpg'
import croquette from '../images/croquette.jpg'


const Appetizer = () => (
  <div>
    <Row>
      <Col>
        <div className="single_food_item d-flex">
        <Card.Img src={takoyaki} className="mr-3 food_img" alt="..."/>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Tako Yaki</Card.Title>
              <Card.Text className="price">
                $5
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
      <Col>
        <div className="single_food_item d-flex">
        <Card.Img src={croquette} className="mr-3 food_img" alt="..."/>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Vegetable Croquette</Card.Title>
              <Card.Text className="price">
                $4
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
      <Col>
        <div className="single_food_item d-flex">
        <Card.Img src={takoyaki} className="mr-3 food_img" alt="..."/>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Tako Yaki</Card.Title>
              <Card.Text className="price">
                $5
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>


    </Row>  
  </div>
);

export default Appetizer;