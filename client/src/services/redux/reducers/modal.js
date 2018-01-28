import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionTypes";

const modalState = {
    showModal: false
}

export function modal(state = modalState, action) {
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