import React from "react";
import CurrentQuestion from "../components/currentQuestion/currentQuestion.component";
import AnswerArea from "../components/answerArea/answerArea.component";
import ButtonNext from "../components/buttonNext/buttonNext.component";
import { useSelector } from "react-redux";

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
