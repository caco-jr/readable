import React from 'react'
import { connect } from 'react-redux'
import { getTime } from '../../../../services/utils/util';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/fontawesome-free-regular';
import Vote from '../../../../components/Vote'
import DetailForm from './DetailForm'
import { editPost } from '../../../../services/redux/actions/index';

const DetailBox = props => {
    const {
        selected,
        editPost,
    } = props;

    const {
        id,
        author,
        voteScore,
        category,
        timestamp,
    } = selected.post;

    const submit = (values) => {
        const post = {
            id: values.id,
            timestamp: values.timestamp,
            title: values.title || selected.post.title,
            body: values.body || selected.post.body,
            author: values.author,
            voteScore: selected.post.voteScore,
            category: values.category,
            comments: values.comments || [],
            commentCount: selected.post.commentCount,
            deleted: false,
        }

        editPost(post);
    }

    return (
        <section className="details card" >
            <DetailForm onSubmit={submit} />

            <Vote
                id={id}
                className="details__form--vote"
                component="post" >
                {voteScore}
            </Vote>

            <span className="details--category">
                {category}
            </span>

            <span className="details--time" >
                <FontAwesomeIcon
                    className={`details__form--time-icon`}
                    icon={faClock} />
                {getTime(timestamp)}
            </span>

            <span className="details--author">
                <FontAwesomeIcon
                    className={`details__form--author-icon`}
                    icon={faUser} />
                {author}
            </span>
        </section>
    )
}

function mapStateToProps({ selected }) {
    return { selected }
}

function mapDispatchToProps(dispatch) {
    return {
        editPost: (post) => dispatch(editPost(post)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailBox)