import {
  DOWNLOAD_ALL_PRODUCTS_SUCCESS,
  DOWNLOAD_ALL_PRODUCTS_REQUESTED,
  DOWNLOAD_ALL_PRODUCTS_ERROR,
  FILTER_BY_CATEGORY,
  UPLOAD_PRODUCT_RATING_REQUESTED,
  UPLOAD_PRODUCT_RATING_SUCCESS,
  UPLOAD_PRODUCT_RATING_ERROR
} from "../actions/products.actions";
import { downloadRequestStates } from "../../app/constants";

const initialState = {
  downloadRequestState: downloadRequestStates.IDLE,
  productList: [],
  selectedCategories: "all",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_ALL_PRODUCTS_REQUESTED:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.LOADING,
      };

    case DOWNLOAD_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.SUCCESS,
        productList: action.payload.data,
      };

    case DOWNLOAD_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        downloadRequestState: downloadRequestStates.ERROR,
      };

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        selectedCategories: action.payload,
      };

      case UPLOAD_PRODUCT_RATING_REQUESTED:
        return {
          ...state,
          uploadRatingRequestState: downloadRequestStates.LOADING,
        };
  
      case UPLOAD_PRODUCT_RATING_SUCCESS:
        return {
          ...state,
          uploadRatingRequestState: downloadRequestStates.SUCCESS,
          productList: [...state.productList.filter(product => product.itemNo !== action.payload.data.itemNo), action.payload.data]/* MVP - added state.product */
        };
  
      case UPLOAD_PRODUCT_RATING_ERROR:
        return {
          ...state,
          uploadRatingRequestState: downloadRequestStates.ERROR,
        };

    default:
      return state;
  }
};

export default productsReducer;
