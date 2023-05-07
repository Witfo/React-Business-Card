import './App.css';
import React from 'react';
import Info from './Info.js';
import About from './About.js';
import Interest from './Interest.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Info/>
          <About/>
          <Interest/>
          <Footer/>
        </div>
      </header>
    </div>
  );
}

export default App;
