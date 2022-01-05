import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

import FormInput from "../formInput";
import CustomButton from "../customButton";
import { useAuth } from "../../context";

import "./styles.scss";
import {auth, createUserProfileDocument} from "../../firebase/utils";

const SignUp = () => {
  const signup = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { firstName, secondName, email, password, passwordConfirm } =
    userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = firstName + " " + secondName;

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          label="First Name"
          required
        />
        <FormInput
          type="text"
          name="secondName"
          value={secondName}
          onChange={handleChange}
          label="Second Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton disabled={loading} type="submit">
          SIGN UP
        </CustomButton>
        {error && <Alert severity="error">{error}</Alert>}
      </form>
    </div>
  );
};

export default SignUp;
