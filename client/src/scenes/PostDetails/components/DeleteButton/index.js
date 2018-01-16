import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular';
import { deleteComment, deletePost } from '../../../../services/redux/actions/index';

const DeleteButton = ({
    id,
    component,
    className,
    deleteComment,
    deletePost,
    history
}) => {
    const handleDelete = () => {
        if (component === "comment") {
            deleteComment(id);
        } else if (component === "post") {
            deletePost(id);
            history.goBack();
        }
    }

    return (
        <button
            className={`${className} delete--button`}
            type="button"
            onClick={() => handleDelete()} >
            <FontAwesomeIcon
                className={`${className}-icon delete--button-icon`}
                icon={faTrashAlt} />
        </button>
    )
}

DeleteButton.defaultProps = {
    className: "remove--button"
}

DeleteButton.propTypes = {
    // id: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired,
    className: PropTypes.string,
}

function mapDispatchToProps(dispatch) {
    return {
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        deletePost: (postId) => dispatch(deletePost(postId)),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(DeleteButton));