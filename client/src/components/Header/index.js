import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <section className="container">

                <Link to={"/"} >
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>

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