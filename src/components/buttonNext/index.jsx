import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  setIsCorrectCurrentBird,
  setIsLevelCompleted,
  setLevel,
  setSelectedBird,
} from "../../redux/actions";
import {
  selectIsLevelCompleted,
  selectLevel,
  selectMaxLevel,
} from "../../redux/selectors";

import "./styles.scss";

const ButtonNext = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let level = useSelector(selectLevel);
  const isLevelCompleted = useSelector(selectIsLevelCompleted);
  const maxLevel = useSelector(selectMaxLevel);
  const START_LEVEL = 1;

  return (
    <button
      className={`button-next ${isLevelCompleted ? "active" : ""}`}
      onClick={() => {
        if (isLevelCompleted) {
          if (level < maxLevel) {
            level++;
          } else {
            history.push("/endGame");
            level = START_LEVEL;
          }
          dispatch(setSelectedBird(null));
        }
        dispatch(setIsCorrectCurrentBird(false));
        dispatch(setLevel(level));
        dispatch(setIsLevelCompleted(false));
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNext;
