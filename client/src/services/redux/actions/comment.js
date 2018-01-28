import * as ReadableAPI from '../../api/ReadableAPI';
import * as actionTypes from './actionTypes';

export function downVoteComment(commentID) {
    return dispatch => {
        ReadableAPI.downVoteComment(commentID)
            .then(comment =>
                dispatch({ type: actionTypes.DOWN_VOTE_COMMENT, comment })
            );
    }
}

export function upVoteComment(commentID) {
    return dispatch => {
        ReadableAPI.upVoteComment(commentID)
            .then(comment =>
                dispatch({ type: actionTypes.UP_VOTE_COMMENT, comment })
            );
    }
}

export function addComment(comment) {
    return dispatch => {
        ReadableAPI.addComment(comment).then(comment => {
            dispatch({ type: actionTypes.ADD_COMMENT, comment })
        });
    };
}

export function deleteComment(commentID) {
    return dispatch => {
        ReadableAPI.deleteComment(commentID).then(comment =>
            dispatch({ type: actionTypes.DELETE_COMMENT, comment })
        );
    };
}

export function editComment(comment) {
    return dispatch => {
        ReadableAPI.editComment(comment).then(editedComment => {
            dispatch({ type: actionTypes.EDIT_COMMENT, editedComment })
        });
    };
}