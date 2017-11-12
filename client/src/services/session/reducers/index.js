import { combineReducers } from 'redux'
import {
    GET_CATEGORIES
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

export default combineReducers({
    categories
});