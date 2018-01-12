import React from 'react'
import { connect } from 'react-redux'
import { downVoteComment, upVoteComment } from '../../../../services/redux/actions'
import { getTime } from '../../../../services/utils/util'

const CommentItem = ({
    id,
    body,
    author,
    voteScore,
    timestamp,
    downVoteComment,
    upVoteComment,
}) => {
    return (
        <section className="comment__item" >
            <h3> {body} </h3>
            <p> {author} </p>

            <section>
                <button onClick={() => downVoteComment(id)} >
                    -
                </button>

                {voteScore}

                <button onClick={() => upVoteComment(id)} >
                    +
                </button>
            </section>

            <span> {getTime(timestamp)} </span>
        </section>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        downVoteComment: (commentID) => dispatch(downVoteComment(commentID)),
        upVoteComment: (commentID) => dispatch(upVoteComment(commentID)),
    }
}

export default connect(null, mapDispatchToProps)(CommentItem)