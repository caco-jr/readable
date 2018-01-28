import { SET_SELECTED } from "../actions/actionTypes";

const select = {
    category: {
        path: ''
    },
    post: {}
}

export function selected(state = select, action) {
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