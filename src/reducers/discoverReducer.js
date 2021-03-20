const initialState = {
  discover: [],
  isLoadingDiscover: true,
};
const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DISCOVER":
      return { ...state, discover: action.payload, isLoadingDiscover: false };
    case "LOADING_DISCOVER":
      return { ...state, isLoadingDiscover: true };
    case "EMPTY_DISCOVER":
      return { ...state, discover: [], isLoadingDiscover: true };
    default:
      return state;
  }
};

export default discoverReducer;
