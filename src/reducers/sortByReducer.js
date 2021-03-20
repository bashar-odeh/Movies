const initialState = {
  sortBy: "popularity.desc",
};
const sortByReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "EMPTY":
      return { ...state, sortBy: "popularity.desc" };

    default:
      return state;
  }
};

export default sortByReducer;
