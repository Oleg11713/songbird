import React from "react";

import "./buttonNext.styles.scss";
import {
    isCorrectCurrentBird,
    isLevelCompleted,
    isSelectedBirdExist,
    setLevel,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ButtonNext = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let level = useSelector((state) => state.level);
  const levelCompleted = useSelector((state) => state.levelCompleted);
  return (
    <button
      className={`button-next ${levelCompleted ? "active" : ""}`}
      onClick={() => {
        if (levelCompleted) {
          if (level < 5) {
            level++;
            dispatch(isSelectedBirdExist(false));
          } else {
            history.push("/endGame");
            level = 0;
            dispatch(isSelectedBirdExist(false));
          }
        }
          dispatch(isCorrectCurrentBird(false))
        dispatch(setLevel(level));
        dispatch(isLevelCompleted(false));
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNext;
