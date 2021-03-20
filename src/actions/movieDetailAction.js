import axios from "axios";
import { getMovieDetails } from "../api";
const movieDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_DETAILS" });

    let { data } = await axios.get(getMovieDetails(id));

    dispatch({
      type: "FETCHING_DETAILS",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default movieDetailsAction;
