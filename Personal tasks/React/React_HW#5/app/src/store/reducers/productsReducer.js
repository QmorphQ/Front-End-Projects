
const defaultState = {
  products: [],
  products_fetched: 0,
};
//------------------------------------------------------------
const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";
const CHECK_PRODUCTS_LIST = "CHECK_PRODUCTS_LIST";

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return { ...state, products: [...state.products, ...action.payload] };
    case CHECK_PRODUCTS_LIST:
      return { ...state, products_fetched: action.payload };
    default:
      return state;
  }
};
//------------------------------------------------------------
//Actions:
export const getProductsList = (payload) => ({
  type: GET_PRODUCTS_LIST,
  payload,
});
export const productsListReady = (payload) => ({
  type: CHECK_PRODUCTS_LIST,
  payload,
});

//------------------------------------------------------------
