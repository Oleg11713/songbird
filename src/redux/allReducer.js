export const allReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_BIRD":
      return {
        ...state,
        selectedBird: action.payload,
      };
    case "SET_LEVEL":
      return {
        ...state,
        level: action.payload,
      };
    case "SET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    case "SET_CURRENT_BIRD":
      return {
        ...state,
        currentBird: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
