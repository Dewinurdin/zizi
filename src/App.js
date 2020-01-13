import React from 'react';

import Navbar from './components/NavBar';
import Menu from './pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="hero-overlay">
        <Navbar />
      </div>
      <Menu />
    </div>

  );
}

export default App;
