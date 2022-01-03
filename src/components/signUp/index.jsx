import React, { useState } from "react";

import FormInput from "../formInput";
import CustomButton from "../customButton";

import { auth, createUserProfileDocument } from "../../firebase/utils";

import "./styles.scss";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, secondName, email, password, confirmPassword } =
    userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
         const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { firstName, secondName });

      setUserCredentials({
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
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
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
