import { ENABLE_EDITING, DISABLE_EDITING } from "../actions/actionTypes";

const editState = {
    post: false,
    comment: false,
    object: {}
}

export function toggleEditing(state = editState, action) {
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