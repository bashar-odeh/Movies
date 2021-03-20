const initialState = {
  images: {},
  genres: [],
  isLoadingConfig: true,
};
const configurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_CONFIG":
      return {
        ...state,
        images: action.payload.images,
        genres: action.payload.genres,
        isLoadingConfig: false,
      };

    case "LOADING_CONFIG":
      return { ...state, isLoadingConfig: true };
    default:
      return state;
  }
};
export default configurationReducer;
