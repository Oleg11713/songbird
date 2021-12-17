export const setSelectedBird = (bird) => ({
  type: "SET_SELECTED_BIRD",
  payload: bird,
});

export const setLevel = (level) => ({
  type: "SET_LEVEL",
  payload: level,
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total,
});

export const setCurrentBird = (bird) => ({
  type: "SET_CURRENT_BIRD",
  payload: bird,
});

export const isLevelCompleted = (levelCompleted) => ({
  type: "IS_LEVEL_COMPLETED",
  payload: levelCompleted,
});
