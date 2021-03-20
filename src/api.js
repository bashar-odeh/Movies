const baseURL = `https://api.themoviedb.org/3/`;

export const ConfigurationURL = () =>
  `${baseURL}configuration?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67`;
export const trendingMovies = () =>
  `${baseURL}trending/movie/day?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67`;
export const popularMovies = (page) =>
  `${baseURL}movie/popular?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67&language=en-US&page=${page}`;
export const topRatedMovies = () =>
  `${baseURL}movie/top_rated?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67&language=en-US&page=1`;
export const upcomingMovies = (page) =>
  `${baseURL}movie/upcoming?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67&language=en-US&page=${page}`;
export const genresURL = () =>
  `${baseURL}genre/movie/list?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67&language=en-US`;

export const getMovieDetails = (id) =>
  `${baseURL}movie/${id}?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67&language=en-US&include_image_language=null&append_to_response=videos,images,recommendations,keywords,reviews,credits`;
export const getMovieCredits = (id) =>
  `${baseURL}movie/${id}/credits?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67&language=en-US`;
export const discoverURL = (page, year, sortBy) => {
  return `${baseURL}discover/movie?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}&year=${year}&sort_by=${sortBy}`;
};
export const searchURL = (query, page) =>
  `${baseURL}search/movie?api_key=bd0c0ce8de5b14ec5ecda9aab9c8ae67&language=en-US&page=${page}&include_adult=false&${query}`;
