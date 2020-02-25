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
      // console.log(window.scrollY);
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
          <Nav className="ml-auto" >
            <Nav.Link className="menu-link" href="#about">About</Nav.Link>
            <Nav.Link className="menu-link" href="#menu">Menu</Nav.Link>
            <Nav.Link className="menu-link" href="#visit">Visit</Nav.Link>
            <Nav.Link className="menu-link" href="#order">Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    );
  }
};

export default Navigation;