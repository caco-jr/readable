import * as actionTypes from './actionTypes';

export function openModal() {
    return dispatch => {
        dispatch({ type: actionTypes.OPEN_MODAL })
    }
}

export function closeModal(object) {
    return dispatch => {
        dispatch({ type: actionTypes.CLOSE_MODAL })
    }
}