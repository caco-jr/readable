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