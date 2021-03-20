import { combineReducers } from "redux";
// reducers
import configurationReducer from "./configurationReducer";
import HomePageMoviesReducer from "./HomePageMoviesReducer";
import movieDetailsReducer from "./movieDetailReducer";
import discoverReducer from "./discoverReducer";
import searchReducer from "./searchReducer";
import yearReducer from "./yearReducer";
import sortByReducer from "./sortByReducer";
import queryReducer from "./queryReducer";
const rootReducer = combineReducers({
  config: configurationReducer,
  homePageMovies: HomePageMoviesReducer,
  details: movieDetailsReducer,
  discover: discoverReducer,
  search: searchReducer,
  year: yearReducer,
  sortBy: sortByReducer,
  query: queryReducer,
});
export default rootReducer;
