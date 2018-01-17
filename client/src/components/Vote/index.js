import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/fontawesome-free-regular';
import {
    downVoteComment,
    upVoteComment,
    downVotePost,
    upVotePost
} from '../../services/redux/actions/index';

const Vote = ({
    id,
    children,
    component,
    className,
    downVoteComment,
    upVoteComment,
    downVotePost,
    upVotePost,
}) => {
    const handleDownVote = () => {
        if (component === "comment") {
            downVoteComment(id);
        } else if (component === "post") {
            downVotePost(id);
        }
    }

    const handleUpVote = () => {
        if (component === "comment") {
            upVoteComment(id);
        } else if (component === "post") {
            upVotePost(id);
        }
    }

    return (
        <section className={`${className} vote`} >
            <button type="button" onClick={() => handleDownVote()} >
                <FontAwesomeIcon
                    className={`details__form--time-icon`}
                    icon={faThumbsDown} />
            </button>

            <span> {children} </span>

            <button type="button" onClick={() => handleUpVote()} >
                <FontAwesomeIcon
                    className={`details__form--time-icon`}
                    icon={faThumbsUp} />
            </button>
        </section>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        downVoteComment: (commentID) => dispatch(downVoteComment(commentID)),
        upVoteComment: (commentID) => dispatch(upVoteComment(commentID)),
        downVotePost: (postId) => dispatch(downVotePost(postId)),
        upVotePost: (postId) => dispatch(upVotePost(postId)),
    }
}

export default connect(null, mapDispatchToProps)(Vote)