import { birdsData } from "../components/birds-data";
import { createStore } from "redux";

export const INITIAL_STATE = {
  birds: birdsData,
  level: 0,
  total: 0,
  selectedBird: null,
  levelCompleted: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SELECTED_BIRD":
      return {
        ...state,
        selectedBird: action.payload,
      };
    case "IS_LEVEL_COMPLETED":
      return {
        ...state,
        levelCompleted: action.payload,
      };
    case "SET_LEVEL":
      return {
        ...state,
        level: action.payload,
      };
    case "SET_TOTAL":
      return {
        ...state,
        total: state.total + action.payload,
      };
    case "SET_CURRENT_BIRD":
      return {
        ...state,
        currentBird: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
