import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import FormInput from "../formInput";
import CustomButton from "../customButton";
import { auth, createUserProfileDocument } from "../../firebase/utils";

import "./styles.scss";

const SignUp = () => {
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
      return toast.error("Пароли не совпадают", {
        className: "toast-error",
        draggable: false,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }

    try {
      setLoading(true);
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      history.push("/");
      toast.success("Вы успешно зарегистрировались", {
        className: "toast-error",
        draggable: false,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch {
      toast.error("Не удалось зарегистрироваться", {
        className: "toast-error",
        draggable: false,
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }

    setLoading(false);
  };

  return (
    <div className="sign-up">
      <div className="title">У меня нет аккаунта</div>
      <div>Зарегистрируйтесь, указав свой адрес электронной почты и пароль</div>
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
      </form>
      <>
        <ToastContainer />
      </>
    </div>
  );
};

export default SignUp;
