import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelected } from '../../services/redux/actions';

const Post = ({ post, setSelected, selected }) => {
    const {
        title,
        commentCount,
        voteScore,
        body
    } = post;

    return (
        <section className="card__post" onClick={() => setSelected('post', post)} >
            <h3> {title} </h3>
            <p> {body} </p>
            <span> {`Número de comentários: ${commentCount}`} </span>

            <section>
                <button > - </button>
                {voteScore}
                <button> + </button>
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
        setSelected: (who, object) => dispatch(setSelected(who, object))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);