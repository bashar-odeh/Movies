const initialState = {
  query: "",
};
const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "query":
      return { ...state, query: action.payload };
    case "EMPTY":
      return { ...state, query: "" };

    default:
      return state;
  }
};

export default queryReducer;
