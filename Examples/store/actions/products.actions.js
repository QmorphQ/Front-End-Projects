export const DOWNLOAD_ALL_PRODUCTS_REQUESTED = "DOWNLOAD_ALL_PRODUCTS_REQUESTED";
export const downloadAllProductsRequested = () => ({
  type: DOWNLOAD_ALL_PRODUCTS_REQUESTED,
});

export const  DOWNLOAD_ALL_PRODUCTS_SUCCESS = "DOWNLOAD_ALL_PRODUCTS_SUCCESS";
export const downloadAllProductsSuccess = (products) => ({
  type: DOWNLOAD_ALL_PRODUCTS_SUCCESS,
  payload: products,
});

export const DOWNLOAD_ALL_PRODUCTS_ERROR = "DOWNLOAD_ALL_PRODUCTS_ERROR";
export const downloadAllProductsError = () => ({
  type: DOWNLOAD_ALL_PRODUCTS_ERROR,
});

export const FILTER_BY_CATEGORY = "FILTER_PRODUCTS_BY_CATEGORY";
export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  payload: category,
});

export const UPLOAD_PRODUCT_RATING_REQUESTED = "UPLOAD_PRODUCT_RATING_REQUESTED";
export const uploadProductRatingRequested = () => ({
  type: UPLOAD_PRODUCT_RATING_REQUESTED,
});

export const UPLOAD_PRODUCT_RATING_SUCCESS = "UPLOAD_PRODUCT_RATING_SUCCESS";
export const uploadProductRatingSuccess = (product) => ({
  type: UPLOAD_PRODUCT_RATING_SUCCESS,
  payload: product,
});

export const UPLOAD_PRODUCT_RATING_ERROR = "UPLOAD_PRODUCT_RATING_ERROR";
export const uploadProductRatingError = () => ({
  type: UPLOAD_PRODUCT_RATING_ERROR,
});
