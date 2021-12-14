import React from "react";

import "./answerArea.styles.scss";
import AnswerOptions from "../answerOptions/answerOptions.component";
import Description from "../description/description.component";

const AnswerArea = ({ birds }) => (
  <div className="answer-area">
    <AnswerOptions birds={birds} />
    <Description birds={birds[1]} />
  </div>
);

export default AnswerArea;
