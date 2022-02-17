import axios from "axios";
import {
  addCustomerRequested,
  addCustomerSuccess,
  addCustomerError,
  loginCustomerRequested,
  loginCustomerSuccess,
  loginCustomerError,
} from "../actions/customer.actions";

const addCustomer = (customer) => (dispatch) => {
  dispatch(addCustomerRequested());
  axios
    .post("http://localhost:5000/api/customers", customer)
    .then((savedCustomer) => {
      dispatch(addCustomerSuccess(savedCustomer));
    })
    .catch(() => {
      dispatch(addCustomerError());
    });
};

const loginCustomer = (userData) => (dispatch) => {
  dispatch(loginCustomerRequested());
  axios
    .post("http://localhost:5000/api/customers/login", userData)
    .then((loginResult) => {
      localStorage.setItem("jwt", loginResult.data.token);
      dispatch(loginCustomerSuccess(loginResult));
    })
    .catch(() => {
      dispatch(loginCustomerError());
    });
};

export { addCustomer, loginCustomer };
