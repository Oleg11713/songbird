import React, { useReducer } from "react";

import "./App.css";
import Header from "./components/header/header.component";
import CurrentQuestion from "./components/currentQuestion/currentQuestion.component";
import AnswerArea from "./components/answerArea/answerArea.component";
import ButtonNext from "./components/buttonNext/buttonNext.component";
import { INITIAL_STATE as state, INITIAL_STATE } from "./redux/state";
import { allReducer } from "./redux/allReducer";
import { connect } from "react-redux";

const App = () => {
  const [state] = useReducer(allReducer, INITIAL_STATE);
  const { birds, level, total, selectedBird } = state;

  const currentBird =
    birds[level][Math.floor(Math.random() * birds[level].length)];

  console.log(state.level);

  return (
    <div className="container">
      <Header total={total} level={level} />
      <CurrentQuestion
        key={currentBird.id}
        name={currentBird.name}
        audio={currentBird.audio}
        image={currentBird.image}
      />
      <AnswerArea
        birds={birds[level]}
        currentBird={currentBird}
        selectedBird={selectedBird}
      />
      <ButtonNext level={level} />
    </div>
  );
};

const mapStateToProps = () => ({
  selectedBird: state.selectedBird,
  level: state.level,
});

export default connect(mapStateToProps)(App);
