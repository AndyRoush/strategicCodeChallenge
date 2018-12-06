import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navibar from './components/Navbar/Navibar';
import Home from './components/Home/Home';
import Hero from './components/Hero/Hero';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navibar />
          <Hero />
          <Home />

        </div>
      </Router>
    );
  }
}

export default App;
