import React, { useState } from "react";
import firebase from "firebase/compat";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@material-ui/core";

import CustomButton from "../customButton";
import { auth } from "../../firebase/utils";
import { setCurrentUser } from "../../redux/user/actions";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Введите корректный адрес эл. почты")
      .required("Пожалуйста, заполните данное поле"),
    password: yup.string().required("Пожалуйста, заполните данное поле"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await auth.signInWithEmailAndPassword(values.email, values.password);
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
    },
    validationSchema: validationSchema,
  });

  const loginWithGoogle = async () => {
    dispatch(
      setCurrentUser(
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      )
    );
  };

  return (
    <div className="sign-in">
      <div className="title">У меня уже есть аккаунт</div>
      <div>Войдите в систему, указав свой адрес электронной почты и пароль</div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="emailSignIn"
          name="email"
          type="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="passwordSignIn"
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <div className="buttons">
          <CustomButton disabled={loading} type="submit">
            Sign in
          </CustomButton>
          <CustomButton type="submit" onClick={loginWithGoogle} isGoogleSignIn>
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
