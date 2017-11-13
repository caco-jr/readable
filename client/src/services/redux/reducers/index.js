import { combineReducers } from 'redux'
import {
    GET_CATEGORIES,
    GET_POSTS
} from '../actions/actionTypes'

function categories(state = {}, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                allCategories: action.categories.categories
            };

        default:
            return { ...state };
    }
}

function posts(state = {}, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                allPosts: action.posts
            };

        default:
            return { ...state }
    }
}

export default combineReducers({
    categories,
    posts
});