import React, { PureComponent } from 'react'

class Comment extends PureComponent {
    render() {
        const { body, author, voteScore } = this.props.comment;

        return (
            <section className="comment__item" >
                <h3> {body} </h3>
                <p> {author} </p>
                <span> {voteScore} </span>

                {/* <section>
                    <button onClick={() => downVotePost(id)} > - </button>
                    {voteScore}
                    <button onClick={() => upVotePost(id)} > + </button>
                </section> */}
            </section>
        )
    }
}

export default Comment