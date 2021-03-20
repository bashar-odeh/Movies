const initialState = {
  details: [],
  isLoadingDetails: true,
};
const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DETAILS":
      return { ...state, details: action.payload, isLoadingDetails: false };
    case "LOADING_DETAILS":
      return { ...state, isLoadingDetails: true };
    default:
      return state;
  }
};

export default movieDetailsReducer;
