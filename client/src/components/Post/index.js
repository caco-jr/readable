import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { setSelected } from '../../services/redux/actions';

const Post = ({ post, posts, setSelected, selected, history }) => {
    const {
        title,
        commentCount,
        body
    } = post;

    const changeRoute = () => {
        setSelected('post', post)
        history.push(`/${post.category}/${post.id}`, { post })
    }

    return (
        <section className="card__post" onClick={() => changeRoute()} >
            <h3> {title} </h3>
            <p> {body} </p>
            <span> {`Número de comentários: ${commentCount}`} </span>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));