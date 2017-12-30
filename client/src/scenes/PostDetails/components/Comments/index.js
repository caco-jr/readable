import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComments } from '../../../../services/api/ReadableAPI'
import Comment from './Comment';

class Comments extends PureComponent {
    state = {
        comments: []
    }

    componentDidMount() {
        const { id } = this.props.selected.post

        getComments(id).then(
            comments => this.setState({ comments })
        )
    }

    componentWillReceiveProps(nextProps) {
        const { id } = nextProps.selected.post
        const { post } = this.props.selected

        if (post.id !== id) {
            getComments(id).then(
                comments => this.setState({ comments })
            )
        }
    }

    render() {
        const { comments } = this.state

        return (
            <Fragment>
                {
                    comments.map(
                        comment => (
                            <Comment key={comment.id} {...comment} />
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

export default connect(mapStateToProps, '')(Comments)