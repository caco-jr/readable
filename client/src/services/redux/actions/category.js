import * as ReadableAPI from '../../api/ReadableAPI';
import * as actionTypes from './actionTypes';

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

export function orderByPostsCategory(order) {
    return dispatch => {
        dispatch({ type: actionTypes.ORDER_BY_POSTS_CATEGORY, order })
    };
}