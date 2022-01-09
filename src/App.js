import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header";
import Homepage from "./pages/homepage";
import EndGamePage from "./pages/endGamePage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import { selectCurrentUser } from "./redux/user/selectors";
import { setCurrentUser } from "./redux/user/actions";
import { auth, createUserProfileDocument } from "./firebase/utils";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const result = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (loading)
          userRef.onSnapshot((snapShot) => {
            dispatch(
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
              })
            );
          });
      }
    });
    result();
    return setLoading(false);
  }, [dispatch, loading]);

  console.log(currentUser);

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
