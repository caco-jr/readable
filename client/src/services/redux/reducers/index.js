import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import {
    GET_POSTS,
    ORDER_BY,
    GET_CATEGORIES,
    GET_POSTS_CATEGORY,
    SET_SELECTED,
    DOWN_VOTE_POST,
    UP_VOTE_POST,
    EDIT_POST,
    DOWN_VOTE_COMMENT,
    UP_VOTE_COMMENT,
    ADD_COMMENT,
    DELETE_COMMENT,
    ENABLE_EDITING,
    DISABLE_EDITING,
    EDIT_COMMENT,
    ADD_POST,
    OPEN_MODAL,
    CLOSE_MODAL,
    DELETE_POST,
} from '../actions/actionTypes'

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
    const { comment } = action;

    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                allPosts: action.posts
            };

        case ORDER_BY:
            return {
                ...state,
                allPosts: action.order ?
                    state.allPosts.sort((a, b) => a.voteScore < b.voteScore) :
                    state.allPosts.sort((a, b) => a.timestamp < b.timestamp)
            }

        case ADD_POST:
            return {
                ...state,
                allPosts: state.allPosts.concat([action.newPost])
            }

        case DELETE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter(post => post.id !== action.id)
            }

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

        case DOWN_VOTE_COMMENT:
            return {
                ...state,
                allPosts: state.allPosts
                    .map(post => {
                        if (post.id === comment.parentId) {
                            post.comments = post.comments
                                .map(commentItem => {
                                    if (commentItem.id === comment.id) {
                                        commentItem.voteScore = comment.voteScore
                                    }
                                    return commentItem
                                })
                                .sort((a, b) => a.voteScore < b.voteScore)
                        }
                        return post
                    })

            };

        case UP_VOTE_COMMENT:
            return {
                ...state,
                allPosts: state.allPosts
                    .map(post => {
                        if (post.id === comment.parentId) {
                            post.comments = post.comments
                                .map(commentItem => {
                                    if (commentItem.id === comment.id) {
                                        commentItem.voteScore = comment.voteScore
                                    }
                                    return commentItem
                                })
                                .sort((a, b) => a.voteScore < b.voteScore)
                        }
                        return post
                    })
            };

        case EDIT_COMMENT:
            return {
                ...state,
                allPosts: state.allPosts
                    .map(post => {
                        if (post.id === action.editedComment.parentId) {
                            post.comments = post.comments
                                .filter(comment => comment.id !== action.editedComment.id)
                                .concat([action.editedComment])
                                .sort((a, b) => a.voteScore < b.voteScore)
                        }
                        return post
                    })
            }

        case ADD_COMMENT:
            return {
                ...state,
                allPosts: state.allPosts
                    .map(post => {
                        if (post.id === comment.parentId) {
                            post.comments = post.comments
                                .concat([comment])
                                .sort((a, b) => a.voteScore < b.voteScore)
                            post.commentCount++
                        }
                        return post
                    })
            };

        case DELETE_COMMENT:
            return {
                ...state,
                allPosts: state.allPosts.map(post => {
                    if (post.id === comment.parentId) {
                        post.comments = post.comments
                            .filter(co => co.id !== comment.id)
                    }
                    return post
                })
            };

        default:
            return { ...state }
    }
}

const select = {
    category: {
        path: ''
    },
    post: {}
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

const editState = {
    post: false,
    comment: false,
    object: {}
}

function toggleEditing(state = editState, action) {
    const { who, object } = action;

    switch (action.type) {
        case ENABLE_EDITING:
            return {
                ...state,
                [who]: true,
                object
            };

        case DISABLE_EDITING:
            return {
                ...state,
                ...editState
            }

        default:
            return { ...state };
    }
}

const modalState = {
    showModal: false
}

function modal(state = modalState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                showModal: true
            }

        case CLOSE_MODAL:
            return {
                ...state,
                showModal: false
            }

        default:
            return { ...state }
    }
}

export default combineReducers({
    categories,
    posts,
    selected,
    toggleEditing,
    modal,
    form: formReducer
});