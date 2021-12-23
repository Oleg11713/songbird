import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/header";
import Homepage from "./homepage";
import EndGamePage from "./endGamePage";

import "./App.css";

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
