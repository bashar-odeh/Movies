import axios from "axios";
// api
import { ConfigurationURL, genresURL } from "../api";
const configurationAction = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING_CONFIG" });
    let { data } = await axios.get(ConfigurationURL());
    let genres = await axios.get(genresURL());
    dispatch({
      type: "FETCHING_CONFIG",
      payload: { images: data.images, genres: genres.data.genres },
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING_CONFIG" });
  }
};
export default configurationAction;
