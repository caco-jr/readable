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

export function getPosts() {
    return dispatch => {
        ReadableAPI.getPosts()
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