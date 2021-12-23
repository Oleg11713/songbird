import { createStore } from "redux";

import { birdsData } from "../components/birds-data";

export const INITIAL_STATE = {
  birds: birdsData,
  level: 0,
  total: 0,
  count: 5,
  selectedBird: null,
  levelCompleted: false,
  selectedBirdExist: false,
  correctCurrentBird: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SELECTED_BIRD":
      return {
        ...state,
        selectedBird: action.payload,
      };
    case "IS_SELECTED_BIRD_EXIST":
      return {
        ...state,
        selectedBirdExist: action.payload,
      };
    case "IS_LEVEL_COMPLETED":
      return {
        ...state,
        levelCompleted: action.payload,
      };
    case "IS_CORRECT_CURRENT_BIRD":
      return {
        ...state,
        correctCurrentBird: action.payload,
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
    case "RESET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    case "SET_COUNT":
      return {
        ...state,
        count: action.payload,
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
