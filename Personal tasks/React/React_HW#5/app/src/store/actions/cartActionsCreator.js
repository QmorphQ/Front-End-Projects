import { addCart, removeCart } from "../reducers/cartReducer";

export const addToCart = (payload) => {
    return dispatch => dispatch(addCart(payload))
};
export const removeFromCart = (payload) => {
    return dispatch => dispatch(removeCart(payload))
};