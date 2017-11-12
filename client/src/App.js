import React, { Component } from 'react';
import Main from './Main';
import Header from './components/Header';
import './styles/sass/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
