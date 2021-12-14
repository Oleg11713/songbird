import React from "react";

import "./App.css";
import Header from "./components/header/header.component";
import CurrentQuestion from "./components/currentQuestion/currentQuestion.component";
import { birdsData } from "./components/birds-data";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      birds: birdsData,
    };
  }

  render() {
    const { birds } = this.state;
    return (
      <div className="container">
        <Header />
        {
          <CurrentQuestion
            birds={birds[Math.floor(Math.random() * birds.length)]}
          />
        }
      </div>
    );
  }
}

export default App;
