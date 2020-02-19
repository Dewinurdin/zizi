import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Navigation from './components/NavBar/Navigation';

// import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';
import Menu from './pages/Menu/Menu';
import MeetTheChef from './components/MeetTheChef/MeetTheChef';
import Footer from './components/Footer/Footer';

import Sin from './images/sin_cropped.jpg';
import SinBrother from './images/sin_brother.jpg';

import './App.css';
import './AppMediaQueries.css';

class App extends React.Component {
  render () {
    console.log(this.props.image)
    return (
      <Container className="Main" fluid>
        <Navigation />
        <div className="hero-overlay">
        </div>
        <About />
        <Menu />
        <Container className="meet_the_chefs section" fluid>
          <div className="title">
            <h1 className="d-flex justify-content-center">Meet Our Chefs</h1>
          </div>
          <Row className="chef_row">
            <Col xs={12} sm={6} className="d-flex justify-content-center">
              <MeetTheChef
                image={Sin}
                chefName="Sin"
                text="Chef Master"
              />
            </Col>
            <Col xs={12} sm={6} className="d-flex justify-content-center">
              <MeetTheChef
                image={SinBrother}
                chefName="Seng"
                text="Chef Master"
              />
            </Col>
          </Row>
        </Container>
        <Container className="footer" fluid>
          <Footer />
        </Container>
    </Container>
  
    )
  }
}

export default App;
