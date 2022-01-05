import React, { useState } from "react";
import firebase from "firebase/compat";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";

import FormInput from "../formInput";
import CustomButton from "../customButton";
import { auth } from "../../firebase/utils";
import { setCurrentUser } from "../../redux/user/actions";

import "./styles.scss";

const SignIn = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  };

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    dispatch(setCurrentUser(user));
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton disabled={loading} type="submit">
            Sign in
          </CustomButton>
          <CustomButton onClick={loginWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
      </form>
    </div>
  );
};

export default SignIn;
