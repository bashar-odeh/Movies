const initialState = {
  search: [],
  isSearching: true,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCHING":
      return {
        ...state,
        search: action.payload,
        isSearching: false,
      };
    case "LOADING_SEARCH":
      return { ...state, search: [], isSearching: true, loadingSearch: true };

    default:
      return state;
  }
};
export default searchReducer;
