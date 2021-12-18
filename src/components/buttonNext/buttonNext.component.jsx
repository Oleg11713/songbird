import React from "react";

import "./buttonNext.styles.scss";
import {
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
          } else {
            history.push("/endGame");
            level = 0;
          }
        }
        dispatch(setLevel(level));
        dispatch(isLevelCompleted(false));
        dispatch(isSelectedBirdExist(false));
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNext;
