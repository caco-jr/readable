import React from 'react'
import { connect } from 'react-redux'
import { downVoteComment, upVoteComment } from '../../../../services/redux/actions'

const Comment = ({ body, author, voteScore, downVoteComment, upVoteComment, id }) => {
    return (
        <section className="comment__item" >
            <h3> {body} </h3>
            <p> {author} </p>

            <section>
                <button onClick={() => downVoteComment(id)} > - </button>
                {voteScore}
                <button onClick={() => upVoteComment(id)} > + </button>
            </section>
        </section>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        downVoteComment: (commentID) => dispatch(downVoteComment(commentID)),
        upVoteComment: (commentID) => dispatch(upVoteComment(commentID)),
    }
}

export default connect(null, mapDispatchToProps)(Comment)