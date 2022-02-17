import axios from "axios";
import {
  downloadAllCategoriesRequested,
  downloadAllCategoriesSuccess,
  downloadAllCategoriesError,
} from "../actions/catalog.actions";

const fetchCategories =
  (uri = "http://localhost:5000/api/catalog") =>
  (dispatch) => {
    dispatch(downloadAllCategoriesRequested());
    axios
      .get(uri)
      .then((categories) => {
        dispatch(downloadAllCategoriesSuccess(categories));
        return categories;
      })
      .catch(() => {
        dispatch(downloadAllCategoriesError());
      });
  };

export default fetchCategories;
