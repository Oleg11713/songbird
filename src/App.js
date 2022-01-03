import React from "react";
import { Redirect, Route } from "react-router-dom";

import Header from "./components/header";
import Homepage from "./pages/homepage";
import EndGamePage from "./pages/endGamePage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/utils";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/endGame" component={EndGamePage} />
        <Route
          exact
          path="/signIn"
          render={() =>
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </div>
    );
  }
}

export default App;
