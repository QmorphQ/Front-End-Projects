import { storage } from "../../components/LocalStorage/LocaleStorage";
const initialState = storage.getData("favorite") || [];
//-----------------------------------------------------------
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
//-----------------------------------------------------------
export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((e) => (e.options.Name !== action.payload));
    default:
      return state;
  }
};
//-----------------------------------------------------------
export const addFavorite = (payload) => ({
  type: ADD_FAVORITE,
  payload,
});
export const removeFavorite = (payload) => ({
  type: REMOVE_FAVORITE,
  payload,
});
