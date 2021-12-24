import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CurrentQuestion from "../components/currentQuestion";
import AnswerArea from "../components/answerArea";
import ButtonNext from "../components/buttonNext";
import { selectBirds, selectLevel } from "../redux/selectors";

const Homepage = ({ birds, level }) => {
  const currentBird =
    birds[level - 1][Math.floor(Math.random() * birds[level - 1].length)];

  return (
    <div>
      <CurrentQuestion
        name={currentBird.name}
        audio={currentBird.audio}
        image={currentBird.image}
      />
      <AnswerArea birds={birds[level - 1]} currentBird={currentBird} />
      <ButtonNext />
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    birds: selectBirds,
    level: selectLevel,
  });

export default connect(mapStateToProps)(Homepage);
