import * as ReadableAPI from "../../api/ReadableAPI";
import * as actionTypes from "./actionTypes";

/* Categories Action Creators */

export function getCategories() {
    return dispatch => {
        ReadableAPI.getCategories()
            .then(categories =>
                dispatch({ type: actionTypes.GET_CATEGORIES, categories })
            );
    };
}

export function getPostsCategory(category) {
    return dispatch => {
        ReadableAPI.getPostsCategory(category)
            .then(posts =>
                dispatch({ type: actionTypes.GET_POSTS_CATEGORY, posts })
            );
    }
}

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

export function setSelected(who, object) {
    return dispatch => {
        dispatch({ type: actionTypes.SET_SELECTED, who, object })
    };
}

export function editPost(post) {
    return dispatch => {
        ReadableAPI.editPost(post)
            .then(
            editPost =>
                dispatch({ type: actionTypes.EDIT_POST, editPost })
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