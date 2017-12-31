import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { setSelected } from '../../services/redux/actions';

const CardPost = ({ post, posts, setSelected, selected, history }) => {
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
            <h3 className="card__post--title" > {title} </h3>
            <p className="card__post--description"> {body} </p>
            <span className="card__post--comment" > {`Número de comentários: ${commentCount}`} </span>
        </section>
    )
}

CardPost.propTypes = {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardPost));