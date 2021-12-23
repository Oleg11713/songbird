import { createStore } from "redux";

import { birdsData } from "../components/birds-data";
import { actionTypes } from "./types";

const START_LEVEL = 1;
const START_TOTAL_SCORE = 0;
const START_SCORE_ON_THE_LEVEL = 5;
const MAX_LEVEL = 6;

export const INITIAL_STATE = {
  birds: birdsData,
  level: START_LEVEL,
  totalScore: START_TOTAL_SCORE,
  scoreOnTheLevel: START_SCORE_ON_THE_LEVEL,
  selectedBird: null,
  isLevelCompleted: false,
  isCorrectCurrentBird: false,
  maxLevel: MAX_LEVEL,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_BIRD:
      return {
        ...state,
        selectedBird: action.payload,
      };
    case actionTypes.SET_IS_LEVEL_COMPLETED:
      return {
        ...state,
        isLevelCompleted: action.payload,
      };
    case actionTypes.SET_IS_CORRECT_CURRENT_BIRD:
      return {
        ...state,
        isCorrectCurrentBird: action.payload,
      };
    case actionTypes.SET_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case actionTypes.SET_TOTAL_SCORE:
      return {
        ...state,
        totalScore: state.totalScore + action.payload,
      };
    case actionTypes.RESET_TOTAL_SCORE:
      return {
        ...state,
        totalScore: action.payload,
      };
    case actionTypes.SET_SCORE_ON_THE_LEVEL:
      return {
        ...state,
        scoreOnTheLevel: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
