import React from "react";

import "./App.css";
import Header from "./components/header/header.component";
import Homepage from "./homepage/homepage";
import { Route } from "react-router-dom";
import EndGamePage from "./endGamePage/endGamePage";

const App = () => {

  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/endGame" component={EndGamePage} />
    </div>
  );
};

export default App;
