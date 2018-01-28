import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { setSelected } from '../../services/redux/actions/selected';
import { truncateString } from '../../services/utils/util';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faComments, faUser } from '@fortawesome/fontawesome-free-regular';
import Vote from '../Vote'

const CardPost = ({ post, posts, setSelected, selected, history }) => {
    const {
        author,
        id,
        title,
        commentCount,
        body,
        category,
        voteScore
    } = post;

    const changeRoute = () => {
        setSelected('post', post)
        history.push(`/${post.category}/${post.id}`, { post })
    }

    return (
        <section className="card__post card" >
            <h3 className="card__post--title" onClick={() => changeRoute()} >
                {title}
            </h3>

            <p className="card__post--description"> {truncateString(body, 50)} </p>

            <Vote
                id={id}
                className="card__post--vote"
                component="post" >
                {voteScore}
            </Vote>

            <section className="card__post--extra" >
                <span className="card__post--author">
                    <FontAwesomeIcon
                        className={`card__post--author-icon`}
                        icon={faUser} />
                    {author}
                </span>

                <span className="card__post--category"> {category} </span>

                <span className="card__post--comment" >
                    <FontAwesomeIcon
                        className="card__post--comment-icon"
                        icon={faComments} />

                    {commentCount}
                </span>
            </section>
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