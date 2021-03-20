import axios from "axios";
// api
import {
  trendingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from "../api";

const HomePageMoviesAction = (upcomingPage = 1, popularPage = 1) => async (
  dispatch
) => {
  try {
    dispatch({ type: "LOADING_HOME_PAGE_MOVIES" });
    const urls = [
      trendingMovies(),
      popularMovies(popularPage),
      topRatedMovies(),
      upcomingMovies(upcomingPage),
    ];
    const request = urls.map((url) => axios.get(url).catch((err) => null));

    let [trending, popular, topRated, upcoming] = await axios.all(request);
    dispatch({
      type: "FETCHING_HOME_PAGE_MOVIES",
      payload: {
        trending: trending.data.results,
        popular: popular.data,
        topRated: topRated.data.results,
        upcoming: upcoming.data,
      },
    });
  } catch (error) {
    dispatch({ type: "LOADING_HOME_PAGE_MOVIES" });

    console.log(error);
  }
};

export default HomePageMoviesAction;
