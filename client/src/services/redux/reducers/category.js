import {
    GET_CATEGORIES,
    GET_POSTS_CATEGORY,
    ORDER_BY_POSTS_CATEGORY
} from "../actions/actionTypes";

const category = {
    allCategories: [],
    postsCategory: [],
}

export function categories(state = category, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                allCategories: action.categories.categories
            };

        case GET_POSTS_CATEGORY:
            return {
                ...state,
                postsCategory: action.posts
            }

        case ORDER_BY_POSTS_CATEGORY:
            return {
                ...state,
                postsCategory: action.order ?
                    state.postsCategory.sort((a, b) => a.voteScore < b.voteScore) :
                    state.postsCategory.sort((a, b) => a.timestamp < b.timestamp)
            }

        default:
            return { ...state };
    }
}