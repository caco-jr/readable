import { combineReducers } from 'redux'
import {
    GET_POSTS,
    GET_CATEGORIES,
    GET_POSTS_CATEGORY,
    SET_SELECTED,
    UP_VOTE_POST,
    EDIT_POST,
    DOWN_VOTE_POST
} from '../actions/actionTypes'

const select = {
    category: {
        path: ''
    },
    post: {}
}

const category = {
    allCategories: [],
    postsCategory: [],
}

function categories(state = category, action) {
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

        case EDIT_POST:
            return {
                ...state,
                allPosts: state.allPosts
                    .filter(post => post.id !== action.editedPost.id)
                    .concat([action.editedPost])
                    .sort((a, b) => a.voteScore < b.voteScore)
            };

        case UP_VOTE_POST:
            return {
                ...state,
                allPosts: state.allPosts
                    .map(post => {
                        if (post.id === action.post.id) {
                            post.voteScore = action.post.voteScore
                        }
                        return post
                    })
                    .sort((a, b) => a.voteScore < b.voteScore)
            }

        case DOWN_VOTE_POST:
            return {
                ...state,
                allPosts: state.allPosts
                    .map(post => {
                        if (post.id === action.post.id) {
                            post.voteScore = action.post.voteScore
                        }
                        return post
                    })
                    .sort((a, b) => a.voteScore < b.voteScore)
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