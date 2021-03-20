import axios from "axios";
import { discoverURL } from "../api";
const discoverAction = (page = 1, year = "", sortBy = "") => async (
  dispatch
) => {
  dispatch({ type: "LOADING_DISCOVER" });
  let { data } = await axios.get(discoverURL(page, year, sortBy));
  dispatch({ type: "FETCHING_DISCOVER", payload: data });
};

export default discoverAction;
