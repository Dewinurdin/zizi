import React from 'react';

import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Navbar />
      {/* </header> */}
        <Carousel />
    </div>
  );
}

export default App;
