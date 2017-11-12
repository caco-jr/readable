import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Seja bem vindo desbravador.</h1>
        </header>
    )
}

export default Header;