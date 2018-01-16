import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid'
import CommentItem from './CommentItem';
import AddComment from './AddComment'
import { addComment, editComment } from '../../../../services/redux/actions/index';

class CommentBox extends PureComponent {
    state = {
        showComments: false
    }

    handleComment = () => {
        this.setState({ showComments: true })
    }

    submit = (values) => {
        const { selected, addComment, editComment } = this.props;

        const comment = {
            id: values.id || uuid().split("-").join(""),
            author: values.author,
            body: values.body,
            timestamp: Date.now(),
            parentId: selected.post.id
        }

        if (values.id === undefined) {
            addComment(comment);
        } else {
            editComment(comment)
        }
    }

    render() {
        const { showComments } = this.state;
        const { comments, commentCount } = this.props.selected.post;

        return (
            <section className="comment card" >
                <AddComment onSubmit={this.submit} />

                {
                    commentCount > 0 && (
                        showComments === false ? (
                            <button
                                type="button"
                                className="comment__button--show"
                                onClick={this.handleComment} >

                                {`Mostrar os ${commentCount} comentários`}

                            </button>
                        ) : (
                                comments
                                    .map(comment => (
                                        <CommentItem
                                            key={comment.id}
                                            onSubmit={this.submit}
                                            comment={{ ...comment }} />
                                    ))
                            )
                    )
                }
            </section>
        )
    }
}

CommentBox.propTypes = {
    selected: PropTypes.object.isRequired
}

function mapStateToProps({ selected }) {
    return { selected }
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (comment) => dispatch(addComment(comment)),
        editComment: (comment) => dispatch(editComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)