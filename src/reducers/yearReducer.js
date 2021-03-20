const initialState = {
  yearSelected: "",
};
const yearReducer = (state = initialState, action) => {
  switch (action.type) {
    case "YEAR":
      return { ...state, yearSelected: action.payload };
    case "EMPTY":
      return { ...state, yearSelected: "" };

    default:
      return state;
  }
};

export default yearReducer;
