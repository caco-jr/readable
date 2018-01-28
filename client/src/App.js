import React from 'react';
import Main from './Main';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost'
import './styles/sass/main.css';

const App = () => (
  <div className="App">
    <Header />
    <Navbar />
    <Main>
      <AddPost />
    </Main>
  </div>
);

export default App;
