import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelected, downVotePost, upVotePost } from '../../services/redux/actions';

const Post = ({ post, posts, setSelected, selected, downVotePost, upVotePost }) => {
    const {
        title,
        commentCount,
        voteScore,
        body,
        id
    } = post;

    return (
        <section className="card__post" onClick={() => setSelected('post', post)} >
            <h3> {title} </h3>
            <p> {body} </p>
            <span> {`Número de comentários: ${commentCount}`} </span>

            <section>
                <button onClick={() => downVotePost(id)} > - </button>
                {voteScore}
                <button onClick={() => upVotePost(id)} > + </button>
            </section>
        </section>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired
};

function mapStateToProps({ selected }) {
    return { selected }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelected: (who, object) => dispatch(setSelected(who, object)),
        upVotePost: (postID) => dispatch(upVotePost(postID)),
        downVotePost: (postID) => dispatch(downVotePost(postID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);