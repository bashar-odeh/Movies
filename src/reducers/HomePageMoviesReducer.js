import React from "react";
const initialState = {
  trendingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcominMovies: [],
  isLoadingHomePageMovies: true,
};
const trendingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_HOME_PAGE_MOVIES":
      return {
        ...state,
        trendingMovies: action.payload.trending,
        popularMovies: action.payload.popular,
        topRatedMovies: action.payload.topRated,
        upcominMovies: action.payload.upcoming,
        isLoadingHomePageMovies: false,
      };
    case "LOADING_HOME_PAGE_MOVIES":
      return { ...state, isLoadingHomePageMovies: true };
    default:
      return state;
  }
};

export default trendingMoviesReducer;
