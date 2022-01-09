import React from "react";

import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";

import "./styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
