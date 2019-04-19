import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Body from './components/layout/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={Body} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
