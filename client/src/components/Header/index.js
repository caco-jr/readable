import React from 'react';
import twitter from './images/twitter.svg';
import logo from './images/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <section className="container">

                <Link to={"/"} className="logo" >
                    <span className="logo--text" > READABLE </span>
                    <img className="logo--image" src={logo} alt="logo" />
                </Link>

                <a
                    className="creator__twitter"
                    href="https://twitter.com/cacojr_"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span className="creator__twitter--text" >
                        @cacojr_
                    </span>

                    <img className="creator__twitter--image" src={twitter} alt="twitter" />
                </a>
            </section>
        </header>
    )
}

export default Header;