import { birdsData } from "../../components/birds-data";
import { actionTypes } from "./types";

export const INITIAL_STATE = {
  birds: birdsData,
  selectedBird: null,
  isCorrectCurrentBird: false,
};

export const birdsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_BIRD:
      return {
        ...state,
        selectedBird: action.payload,
      };
    case actionTypes.SET_IS_CORRECT_CURRENT_BIRD:
      return {
        ...state,
        isCorrectCurrentBird: action.payload,
      };
    default:
      return state;
  }
};
