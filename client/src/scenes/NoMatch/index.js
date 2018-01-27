import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <section className="noMatch" >
            <img src="http://i.imgur.com/qhMbkGi.jpg" alt="Confused Travolta" />
            <h1 className="noMatch--title" > Ooops... </h1>
            <p className="noMatch--text" > Página não encontrada :( </p>
            <Link to="/" className="noMatch--link"> Ir para a Home </Link>
        </section>
    )
}

export default NoMatch;