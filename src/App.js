import React from "react";

import "./App.css";
import Header from "./components/header/header.component";
import CurrentQuestion from "./components/currentQuestion/currentQuestion.component";
import { birdsData } from "./components/birds-data";
import AnswerArea from "./components/answerArea/answerArea.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      birds: birdsData,
    };
  }

  render() {
    const { birds } = this.state;
    const currentBird = birds[1][Math.floor(Math.random() * birds[1].length)];
    console.log(currentBird.name);
    return (
      <div className="container">
        <Header />
        <CurrentQuestion
          key={currentBird.id}
          name={currentBird.name}
          audio={currentBird.audio}
          image={currentBird.image}
        />
        <AnswerArea birds={birds[1]} />
      </div>
    );
  }
}

export default App;
