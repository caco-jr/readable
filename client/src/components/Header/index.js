import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <section className="container">
                <img src={logo} className="App-logo" alt="logo" />

                <a
                    className="creator__username"
                    href="https://twitter.com/cacojr_"
                    target="_blank"
                    rel="noopener noreferrer">
                    @cacojr_
                </a>
            </section>
        </header>
    )
}

export default Header;