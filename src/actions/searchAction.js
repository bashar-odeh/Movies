import axios from "axios";
import { searchURL } from "../api";

const searchAction = (query, page = 1) => async (dispatch) => {
  let encodedQuery = encodeURIComponent(query);

  try {
    let result = HandleQuery(encodedQuery);
    dispatch({ type: "LOADING_SEARCH" });

    console.log(searchURL(result, page));
    let { data } = await axios.get(searchURL(result, page));
    dispatch({ type: "SEARCHING", payload: data });
  } catch (error) {
    dispatch({ type: "LOADING_SEARCH" });
  }
};

const HandleQuery = (query) => {
  let result = "";
  if ((query && query.trim().length === 0) || query === "") throw "wrong input";
  if (query && query.trim().length !== 0) result += `query=${query}`;
  return result;
};

export default searchAction;
