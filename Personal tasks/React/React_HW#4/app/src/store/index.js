import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; 
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";
import { modalReducer } from "./reducers/modalReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers(
    {
        productsList: productsReducer,
        modalWindow: modalReducer,
        favorite: favoriteReducer,
        cart: cartReducer,
    }
) 

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


