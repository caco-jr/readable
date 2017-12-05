import React from 'react';
import Vote from '../Vote';

const Post = ({ autor, title, voteScore, body }) => {
    return (
        <section className="card__post" >
            <h3> {title} </h3>
            <p> {body} </p>
            <span> {`Número de comentários: ${voteScore}`} </span>
            <Vote />
        </section>
    )
}

export default Post;