import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';

class NavBar extends React.Component {
  render () {
    return (
      <>
      <Navbar className="App-header">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top zizi-logo"
            alt="zizi-logo"
          />
        </Navbar.Brand>
      </Navbar>
      </>
    )
  }
};


export default NavBar;