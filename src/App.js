import React  from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/header";
import Homepage from "./pages/homepage";
import EndGamePage from "./pages/endGamePage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import { selectCurrentUser } from "./redux/user/selectors";

import "./App.css";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="container">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/endGame" component={EndGamePage} />
      <Route
        exact
        path="/signIn"
        render={() =>
          currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
        }
      />
    </div>
  );
};

export default App;
