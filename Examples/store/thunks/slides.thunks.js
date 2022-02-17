import axios from "axios";
import {
  downloadAllSlidesRequested,
  downloadAllSlidesSuccess,
  downloadAllSlidesError,
} from "../actions/slides.actions";

const fetchSlides =
  (uri = "http://localhost:5000/api/slides") =>
  (dispatch) => {
    dispatch(downloadAllSlidesRequested());
    axios
      .get(uri)
      .then((products) => {
        dispatch(downloadAllSlidesSuccess(products));
        return products;
      })
      .catch(() => {
        dispatch(downloadAllSlidesError());
      });
  };

export default fetchSlides;
