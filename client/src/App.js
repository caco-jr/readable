import React, { Component } from 'react';
import Routes from './Routes';
import Header from './components/Header';
import Navbar from './components/Navbar'
import './styles/sass/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
