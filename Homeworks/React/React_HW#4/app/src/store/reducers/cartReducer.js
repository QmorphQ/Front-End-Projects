import { storage } from "../../components/LocalStorage/LocaleStorage";
const initialState = storage.getData('cart') || [];
//-----------------------------------------------------------
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
//-----------------------------------------------------------
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter((e) => e.options.Name !== action.payload);
        default:
            return state;
    }
}
//-----------------------------------------------------------
//Actions:
export const addCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
})
export const removeCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload,
})