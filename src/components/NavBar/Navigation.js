import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Navigation.css'

class Navigation extends React.Component {
  constructor(){
    super();
    this.state = {
      isScrolling : false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      // this by default will return a Boolean
      const isTop = window.scrollY < 1; 
      // if isTop is Not true
      if ( isTop !== true ){
        // set it to True
        this.setState({ isScrolling : true })
      } else {
        this.setState({ isScrolling: false })
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll')
  }
  render (){
    return (
      <Navbar expand="lg" variant="dark"
        className={`${this.state.isScrolling ? 'navbar-overlay--active' : ''}`}  
      >
        <Navbar.Brand href="/">ZiZi Ramen & Sushi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto" >
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Visit</Nav.Link>
            <Nav.Link href="#link">Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default Navigation;