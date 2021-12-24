import { createSelector } from "reselect";

const totalScore = (state) => state.totalScore;
const isLevelCompleted = (state) => state.isLevelCompleted;
const scoreOnTheLevel = (state) => state.scoreOnTheLevel;
const level = (state) => state.level;
const maxLevel = (state) => state.maxLevel;
const selectedBird = (state) => state.selectedBird;
const isCorrectCurrentBird = (state) => state.isCorrectCurrentBird;
const birds = (state) => state.birds;

export const selectTotalScore = createSelector(
  [totalScore],
  (totalScore) => totalScore
);

export const selectLevel = createSelector([level], (level) => level);

export const selectIsLevelCompleted = createSelector(
  [isLevelCompleted],
  (isLevelCompleted) => isLevelCompleted
);

export const selectScoreOnTheLevel = createSelector(
  [scoreOnTheLevel],
  (scoreOnTheLevel) => scoreOnTheLevel
);

export const selectMaxLevel = createSelector(
  [maxLevel],
  (maxLevel) => maxLevel
);

export const selectSelectedBird = createSelector(
  [selectedBird],
  (selectedBird) => selectedBird
);

export const selectIsCorrectCurrentBird = createSelector(
  [isCorrectCurrentBird],
  (isCorrectCurrentBird) => isCorrectCurrentBird
);

export const selectBirds = createSelector([birds], (birds) => birds);
