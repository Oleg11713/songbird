import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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

const ButtonNext = ({ isLevelCompleted, level, maxLevel }) => {
  const dispatch = useDispatch();
  const history = useHistory();
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

const mapStateToProps = () =>
  createStructuredSelector({
    level: selectLevel,
    isLevelCompleted: selectIsLevelCompleted,
    maxLevel: selectMaxLevel,
  });

export default connect(mapStateToProps)(ButtonNext);
