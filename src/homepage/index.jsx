import React from "react";
import { useSelector } from "react-redux";

import CurrentQuestion from "../components/currentQuestion";
import AnswerArea from "../components/answerArea";
import ButtonNext from "../components/buttonNext";
import { selectBirds } from "../redux/birds/selectors";
import { selectLevel } from "../redux/progress/selectors";

const Homepage = () => {
  const birds = useSelector(selectBirds);
  const level = useSelector(selectLevel) - 1;

  const currentBird =
    birds[level][Math.floor(Math.random() * birds[level].length)];

  return (
    <div>
      <CurrentQuestion
        name={currentBird.name}
        audio={currentBird.audio}
        image={currentBird.image}
      />
      <AnswerArea birds={birds[level]} currentBird={currentBird} />
      <ButtonNext />
    </div>
  );
};

export default Homepage;
