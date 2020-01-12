import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ramen1 from '../images/ramen1.png'
import ramen2 from '../images/ramen2.png'
import ramen3 from '../images/ramen3.png'

class TopCarousel extends React.Component {
  render() {
    return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={ramen1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={ramen2}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={ramen3}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default TopCarousel;