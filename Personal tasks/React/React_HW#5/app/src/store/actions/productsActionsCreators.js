import { getProductsList } from "../reducers/productsReducer";
import { productsListReady } from "../reducers/productsReducer";

const fetchProducts = () => {
  return (dispatch) => {
    fetch("./db.json")
      .then((response) => response.json())
      .then((jsonData) => {
        dispatch(getProductsList(jsonData));
        dispatch(productsListReady(1));
      });
  };
};




export { fetchProducts };
