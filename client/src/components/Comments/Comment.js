import React from 'react'

const Comment = ({ body, author, voteScore }) => {
    return (
        <section className="comment_item" >
            <h3> {body} </h3>
            <p> {author} </p>
            <span> {voteScore} </span>
        </section>
    )
}

export default Comment