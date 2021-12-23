import React from "react";
import { useSelector } from "react-redux";

import CurrentQuestion from "../components/currentQuestion";
import AnswerArea from "../components/answerArea";
import ButtonNext from "../components/buttonNext";

const Homepage = () => {
  const birds = useSelector((state) => state.birds);
  const level = useSelector((state) => state.level);
  const currentBird =
    birds[level][Math.floor(Math.random() * birds[level].length)];

  return (
    <div>
      <CurrentQuestion
        key={currentBird.id}
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
