import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "./components/header";
import Homepage from "./pages/homepage";
import EndGamePage from "./pages/endGamePage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import { Context } from "./index";

import "./App.css";

const App = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/endGame" component={EndGamePage} />
      <Route
        exact
        path="/signIn"
        render={() => (user ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
      />
    </div>
  );
};

export default App;
