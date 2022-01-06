import React, { useState } from "react";
import firebase from "firebase/compat";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormInput from "../formInput";
import CustomButton from "../customButton";
import { auth } from "../../firebase/utils";
import { setCurrentUser } from "../../redux/user/actions";

import "./styles.scss";

const SignIn = () => {
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
      setLoading(true);
      await auth.signInWithEmailAndPassword(email, password);
      toast.success("Авторизация прошла успешно", {
        className: "toast-success",
        draggable: false,
        position: toast.POSITION.BOTTOM_CENTER,
      });
      history.push("/");
    } catch {
      toast.error("Не удалось войти", {
        className: "toast-error",
        draggable: false,
        position: toast.POSITION.BOTTOM_CENTER,
      });
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
      <div className="title">У меня уже есть аккаунт</div>
      <div>Войдите в систему, указав свой адрес электронной почты и пароль</div>
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
      </form>
      <>
        <ToastContainer />
      </>
    </div>
  );
};

export default SignIn;
