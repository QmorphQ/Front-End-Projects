import { addFavorite, removeFavorite } from "../reducers/favoriteReducer"

export const addToFavorite = (payload) => {
    return dispatch => {
        dispatch(addFavorite(payload))
    }
};
export const removeFromFavorite = (payload) => {
    return dispatch => {
        dispatch(removeFavorite(payload))
    }
};