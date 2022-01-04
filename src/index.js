import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/reducer";
import firebase from "firebase/compat";

import App from "./App";
import { auth, firestore } from "./firebase/utils";

import "./index.css";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Context.Provider>,
  document.getElementById("root")
);
