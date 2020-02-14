import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Navbar from './components/NavBar';
import Menu from './pages/Menu';
import MeetTheChef from './components/MeetTheChef';
import Footer from './components/Footer';

import Sin from './images/sin_cropped.jpg';
import SinBrother from './images/sin_brother.jpg';

import './App.css';
import './AppMediaQueries.css';

class App extends React.Component {
  render () {
    console.log(this.props.image)
    return (
      <Container className="Main" fluid>
        <div className="App">
          <div className="hero-overlay">
            <Navbar />
          </div>
          <Menu />
        </div>
        <Container className="meet_the_chefs" fluid>
          <div className="title">
            <h1 className="d-flex justify-content-center">Meet Our Chef</h1>
          </div>
          <Row>
            <Col sm={6} className="left-card">
              <MeetTheChef
                  image={Sin}
                  chefName="Sin"
              />
            </Col>
            <Col sm={6} className="right-card">
              <MeetTheChef
                  image={SinBrother}
                  chefName="Sin's Brother"
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
