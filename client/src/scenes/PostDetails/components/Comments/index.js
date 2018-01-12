import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid'
import CommentItem from './CommentItem';
import AddComment from './AddComment'
import { addComment } from '../../../../services/redux/actions/index';

class CommentBox extends PureComponent {
    state = {
        showComments: false
    }

    handleComment = () => {
        this.setState({ showComments: true })
    }

    submit = (values) => {
        const { parentId } = this.props;

        const comment = {
            id: uuid().split("-").join(""),
            author: values.author,
            body: values.body,
            timestamp: Date.now(),
            parentId
        }

        this.props.addComment(comment);
    }

    render() {
        const { showComments } = this.state;
        const { comments, commentCount } = this.props.selected.post;

        return (
            <section className="comment card" >
                <AddComment onSubmit={this.submit} />

                {
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
                                    <CommentItem key={comment.id} {...comment} />
                                ))
                                .sort((a, b) => a.props.voteScore < b.props.voteScore)
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)