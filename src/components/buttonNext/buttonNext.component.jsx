import React from "react";

import "./buttonNext.styles.scss";
import { isLevelCompleted, setLevel } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ButtonNext = () => {
  const dispatch = useDispatch();
  let level = useSelector((state) => state.level);
  const levelCompleted = useSelector((state) => state.levelCompleted);
  return (
    <button
      className={`button-next ${levelCompleted ? "active" : ""}`}
      onClick={() => {
        if (levelCompleted) {
          if (level < 5) {
            dispatch(isLevelCompleted(false));
            level++;
            dispatch(setLevel(level));
          } else {
            level = 0;
            dispatch(setLevel(level));
          }
        }
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNext;
