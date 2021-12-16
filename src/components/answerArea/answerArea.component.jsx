import React from "react";

import "./answerArea.styles.scss";
import AnswerOptions from "../answerOptions/answerOptions.component";
import Description from "../description/description.component";
import { connect } from "react-redux";
import { INITIAL_STATE as state } from "../../redux/state";

const AnswerArea = ({ birds, currentBird, selectedBird }) => (
  <div className="answer-area">
    <AnswerOptions
      birds={birds}
      currentBird={currentBird}
      selectedBird={selectedBird}
    />
    <Description selectedBird={selectedBird} />
  </div>
);

const mapStateToProps = () => ({
  selectedBird: state.selectedBird,
});

export default connect(mapStateToProps)(AnswerArea);
