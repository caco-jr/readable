import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <a href="https://twitter.com/cacojr_" target="_blank" rel="noopener noreferrer">
                    @cacojr_
                </a>
            </p>
        </header>
    )
}

export default Header;