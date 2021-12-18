export const setSelectedBird = (bird) => ({
  type: "SET_SELECTED_BIRD",
  payload: bird,
});

export const isSelectedBirdExist = (selectedBirdExist) => ({
  type: "IS_SELECTED_BIRD_EXIST",
  payload: selectedBirdExist,
});

export const isCorrectCurrentBird = (correctCurrentBird) => ({
  type: "IS_CORRECT_CURRENT_BIRD",
  payload: correctCurrentBird,
});

export const setLevel = (level) => ({
  type: "SET_LEVEL",
  payload: level,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total,
});

export const resetTotal = (total) => ({
  type: "RESET_TOTAL",
  payload: total,
});

export const setCount = (count) => ({
  type: "SET_COUNT",
  payload: count,
});

export const setCurrentBird = (bird) => ({
  type: "SET_CURRENT_BIRD",
  payload: bird,
});

export const isLevelCompleted = (levelCompleted) => ({
  type: "IS_LEVEL_COMPLETED",
  payload: levelCompleted,
});
