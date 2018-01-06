import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import AddComment from './AddComment'

class Comments extends PureComponent {
    state = {
        showComments: false
    }

    handleComment = () => {
        this.setState({ showComments: true })
    }

    render() {
        const { showComments } = this.state;
        const { commentCount, comments } = this.props.selected.post;

        return (
            <section className="comment card" >
                <AddComment />

                {
                    showComments === false ? (
                        <button
                            type="button"
                            className="comment__button"
                            onClick={this.handleComment} >

                            {`Mostrar os ${commentCount} comentários`}

                        </button>
                    ) : (
                            comments
                                .map(comment => (
                                    <Comment key={comment.id} {...comment} />
                                ))
                                .sort((a, b) => a.props.voteScore < b.props.voteScore)
                        )
                }
            </section>
        )
    }
}

Comments.propTypes = {
    selected: PropTypes.object.isRequired
}

function mapStateToProps({ selected }) {
    return { selected }
}

export default connect(mapStateToProps)(Comments)