import React from 'react';
import { connect } from 'react-redux';
import { downVotePost, upVotePost } from '../../services/redux/actions/index';

const Vote = ({
    id,
    children,
    component,
    className,
    downVotePost,
    upVotePost,
}) => {
    const handleDownVote = () => {
        if (component === "comment") {
        } else if (component === "post") {
            downVotePost(id);
        }
    }

    const handleUpVote = () => {
        if (component === "comment") {
        } else if (component === "post") {
            upVotePost(id);
        }
    }

    return (
        <section className={`${className} vote`} >
            <button type="button" onClick={() => handleDownVote()} >
                -
            </button>

            {children}

            <button type="button" onClick={() => handleUpVote()} >
                +
            </button>
        </section>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        downVotePost: (postId) => dispatch(downVotePost(postId)),
        upVotePost: (postId) => dispatch(upVotePost(postId)),
    }
}

export default connect(null, mapDispatchToProps)(Vote)