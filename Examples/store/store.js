import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import catalog from "./reducers/catalog.reducer";
import products from "./reducers/products.reducer";
import slides from "./reducers/slides.reducer";
import customer from "./reducers/customer.reducer";

const reduxDevToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = combineReducers({
  catalog,
  products,
  slides,
  customer
  
});

const store = configureStore({
  devTools: reduxDevToolsCompose,
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
