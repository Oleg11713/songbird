import React from "react";
import { connect } from "react-redux";

import "./buttonNext.styles.scss";
import { setLevel } from "../../redux/actions";
import { INITIAL_STATE as state } from "../../redux/state";

const ButtonNext = ({ dispatch }) => {
  console.log(state.level);
  return (
    <button
      className="button-next active"
      onClick={() => {
        if (state.level < 5) {
          state.level++;
          dispatch(setLevel(state.level));
        } else {
          state.level = 0;
          dispatch(setLevel(state.level));
        }
      }}
    >
      Next Level
    </button>
  );
};

export default connect()(ButtonNext);
