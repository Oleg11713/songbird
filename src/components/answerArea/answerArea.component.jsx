import React from "react";

import "./answerArea.styles.scss";
import AnswerOptions from "../answerOptions/answerOptions.component";
import Description from "../description/description.component";

const AnswerArea = ({ birds, currentBird }) => (
  <div className="answer-area">
    <AnswerOptions birds={birds} currentBird={currentBird} />
    <Description />
  </div>
);

export default AnswerArea;
