const defaultState = {
    modalIsActive: 0,
}
//---------------------------------------------------------------
const TOGGLE_MODAL_WINDOW = "TOGGLE_MODAL_WINDOW";
//---------------------------------------------------------------
export const modalReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case TOGGLE_MODAL_WINDOW:
            return {...state, modalIsActive: action.payload};
        default:
            return state;
    }
}
//---------------------------------------------------------------
//Actions:
export const getModalWindowState = (payload) => ({
    type: TOGGLE_MODAL_WINDOW,
    payload,
})
//---------------------------------------------------------------