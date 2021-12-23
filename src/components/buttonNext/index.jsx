import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  setIsCorrectCurrentBird,
  setIsLevelCompleted,
  setLevel,
  setSelectedBird,
} from "../../redux/actions";

import "./styles.scss";

const ButtonNext = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const START_LEVEL = 1;

  let level = useSelector((state) => state.level);
  const isLevelCompleted = useSelector((state) => state.isLevelCompleted);
  const maxLevel = useSelector((state) => state.maxLevel);
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
