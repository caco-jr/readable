import * as ReadableAPI from '../../api/ReadableAPI';
import * as actionTypes from './actionTypes';

export function getPosts() {
    return dispatch => {
        ReadableAPI.getPosts()
            .then(posts =>
                Promise.all(
                    posts.map(post =>
                        ReadableAPI
                            .getComments(post.id)
                            .then(comments => post.comments = comments)
                            .then(() => post)
                    )
                )
            )
            .then(posts =>
                dispatch({ type: actionTypes.GET_POSTS, posts })
            );
    }
}

export function deletePost(id) {
    return dispatch => {
        ReadableAPI.deletePost(id).then(posts =>
            dispatch({ type: actionTypes.DELETE_POST, id })
        );
    };
}

export function addPost(post) {
    return dispatch => {
        ReadableAPI.addPost(post)
            .then(newPost =>
                dispatch({ type: actionTypes.ADD_POST, newPost })
            );
    };
}

export function editPost(post) {
    return dispatch => {
        ReadableAPI.editPost(post)
            .then(
            editedPost =>
                dispatch({ type: actionTypes.EDIT_POST, editedPost })
            )
    }
}

export function downVotePost(postID) {
    return dispatch => {
        ReadableAPI.downVotePost(postID)
            .then(post =>
                dispatch({ type: actionTypes.DOWN_VOTE_POST, post })
            );
    }
}

export function upVotePost(postID) {
    return dispatch => {
        ReadableAPI.upVotePost(postID)
            .then(post =>
                dispatch({ type: actionTypes.UP_VOTE_POST, post })
            );
    }
}

export function orderBy(order) {
    return dispatch => {
        dispatch({ type: actionTypes.ORDER_BY, order })
    };
}