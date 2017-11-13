import React from 'react'

const Post = ({ autor, title, voteScore, body }) => {
    return (
        <section className="card__post" >
            <h3> {title} </h3>
            <p> {body} </p>
            <span> {`Número de comentários: ${voteScore}`} </span>
        </section>
    )
}

export default Post;