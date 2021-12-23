import { actionTypes } from "./types";

export const setSelectedBird = (bird) => ({
  type: actionTypes.SET_SELECTED_BIRD,
  payload: bird,
});

export const setIsCorrectCurrentBird = (isCorrectCurrentBird) => ({
  type: actionTypes.SET_IS_CORRECT_CURRENT_BIRD,
  payload: isCorrectCurrentBird,
});

export const setLevel = (level) => ({
  type: actionTypes.SET_LEVEL,
  payload: level,
});

export const setTotalScore = (totalScore) => ({
  type: actionTypes.SET_TOTAL_SCORE,
  payload: totalScore,
});

export const resetTotalScore = (totalScore) => ({
  type: actionTypes.RESET_TOTAL_SCORE,
  payload: totalScore,
});

export const setScoreOnTheLevel = (scoreOnTheLevel) => ({
  type: actionTypes.SET_SCORE_ON_THE_LEVEL,
  payload: scoreOnTheLevel,
});

export const setIsLevelCompleted = (isLevelCompleted) => ({
  type: actionTypes.SET_IS_LEVEL_COMPLETED,
  payload: isLevelCompleted,
});
