import React from "react";

import "./App.css";
import Header from "./components/header/header.component";
import { useSelector } from "react-redux";
import Homepage from "./homepage/homepage";
import { Route } from "react-router-dom";
import EndGamePage from "./endGamePage/endGamePage";

const App = () => {
  const level = useSelector((state) => state.level);
  const total = useSelector((state) => state.total);

  return (
    <div className="container">
      <Header total={total} level={level} />
      <Route exact path="/" component={Homepage} />
      <Route path="/endGame" component={EndGamePage} />
    </div>
  );
};

export default App;
