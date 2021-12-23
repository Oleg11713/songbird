import React from "react";
import { useSelector } from "react-redux";

import CurrentQuestion from "../components/currentQuestion";
import AnswerArea from "../components/answerArea";
import ButtonNext from "../components/buttonNext";

const Homepage = () => {
  const birds = useSelector((state) => state.birds);
  const level = useSelector((state) => state.level);
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

export default Homepage;
