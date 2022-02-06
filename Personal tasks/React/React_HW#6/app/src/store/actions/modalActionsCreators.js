import { getModalWindowState } from ".././reducers/modalReducer";

export const setModalWindowState = (boolean) => {
    return dispatch => {
        dispatch(getModalWindowState(boolean))
    }
}

