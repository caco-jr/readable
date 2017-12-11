import { combineReducers } from 'redux'
import {
    GET_CATEGORIES,
    GET_POSTS,
    SET_SELECTED
} from '../actions/actionTypes'

const select = {
    category: {
        path: ''
    },
    post: {}
}

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

function selected(state = select, action) {
    const { who, object } = action;

    switch (action.type) {
        case SET_SELECTED:
            return {
                ...state,
                [who]: object
            };

        default:
            return { ...state };
    }
}

export default combineReducers({
    categories,
    posts,
    selected
});