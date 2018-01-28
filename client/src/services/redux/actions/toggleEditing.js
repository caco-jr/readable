import * as actionTypes from './actionTypes';

export function enableEditing(who, object) {
    return dispatch => {
        dispatch({ type: actionTypes.ENABLE_EDITING, who, object })
    }
}

export function disableEditing() {
    return dispatch => {
        dispatch({ type: actionTypes.DISABLE_EDITING })
    }
}