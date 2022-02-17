export const ADD_CUSTOMER_REQUESTED = "ADD_CUSTOMER_REQUESTED";
export const addCustomerRequested = () => ({
  type: ADD_CUSTOMER_REQUESTED,
});

export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
export const addCustomerSuccess = (customer) => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: customer,
});

export const ADD_CUSTOMER_ERROR = "ADD_CUSTOMER_ERROR";
export const addCustomerError = () => ({
  type: ADD_CUSTOMER_ERROR,
});

export const LOGIN_CUSTOMER_REQUESTED = "LOGIN_CUSTOMER_REQUESTED";
export const loginCustomerRequested = () => ({
  type: LOGIN_CUSTOMER_REQUESTED,
});

export const LOGIN_CUSTOMER_SUCCESS = "LOGIN_CUSTOMER_SUCCESS";
export const loginCustomerSuccess = (loginResult) => ({
  type: LOGIN_CUSTOMER_SUCCESS,
  payload: loginResult,
});

export const LOGIN_CUSTOMER_ERROR = "LOGIN_CUSTOMER_ERROR";
export const loginCustomerError = () => ({
  type: LOGIN_CUSTOMER_ERROR,
});


