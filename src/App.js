import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Navbar from './components/NavBar';
import Menu from './pages/Menu';
import Footer from './components/Footer';

import './App.css';
import './AppMediaQueries.css';


function App() {
  return (
    <Container className="Main" fluid>
    <div className="App">
      <div className="hero-overlay">
        <Navbar />
      </div>
      <Menu />
    </div>
      <div>
        <Footer />
      </div>
    </Container>
    

  );
}

export default App;
