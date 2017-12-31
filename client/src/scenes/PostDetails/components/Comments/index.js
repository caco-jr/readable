import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComments } from '../../../../services/api/ReadableAPI'
import Comment from './Comment';

class Comments extends PureComponent {
    state = {
        showComments: false,
        comments: [],
    }

    handleComment = () => {
        const { id } = this.props.selected.post

        this.setState({ showComments: true })

        getComments(id).then(
            comments => this.setState({ comments })
        )
    }

    render() {
        const { comments, showComments } = this.state;
        const { commentCount } = this.props.selected.post;

        return (
            <Fragment>
                {
                    showComments === false ? (
                        <button type="button" onClick={this.handleComment} >
                            {`Mostrar os ${commentCount} comentários`}
                        </button>
                    ) : (
                            comments.map(
                                comment => (
                                    <Comment key={comment.id} {...comment} />
                                )
                            )
                        )
                }
            </Fragment>
        )
    }
}

Comments.propTypes = {
    selected: PropTypes.object.isRequired
}

function mapStateToProps({ selected }) {
    return { selected }
}

export default connect(mapStateToProps, null)(Comments)