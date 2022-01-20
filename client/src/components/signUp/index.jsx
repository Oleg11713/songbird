import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@material-ui/core";

import CustomButton from "../customButton";
import { auth, createUserProfileDocument } from "../../firebase/utils";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    firstName: yup.string().required("Пожалуйста, заполните данное поле"),
    secondName: yup.string().required("Пожалуйста, заполните данное поле"),
    email: yup
      .string()
      .email("Введите корректный адрес эл. почты")
      .required("Пожалуйста, заполните данное поле"),
    password: yup.string().required("Пожалуйста, заполните данное поле"),
    passwordConfirm: yup.string().required("Пожалуйста, заполните данное поле"),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      secondName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values) => {
      if (values.password !== values.passwordConfirm) {
        return toast.error("Пароли не совпадают", {
          className: "toast-error",
          draggable: false,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }

      try {
        setLoading(true);
        const { user } = await auth.createUserWithEmailAndPassword(
          values.email,
          values.password
        );
        const displayName = values.firstName + " " + values.secondName;
        const password = values.password;
        await createUserProfileDocument(user, { displayName, password });
        toast.success("Вы успешно зарегистрировались", {
          className: "toast-success",
          draggable: false,
          closeOnClick: false,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        formik.resetForm();
      } catch {
        toast.error("Не удалось зарегистрироваться", {
          className: "toast-error",
          draggable: false,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
      setLoading(false);
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="sign-up">
      <div className="title">У меня нет аккаунта</div>
      <div>Зарегистрируйтесь, указав свой адрес электронной почты и пароль</div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id="secondName"
          name="secondName"
          label="Second Name"
          value={formik.values.secondName}
          onChange={formik.handleChange}
          error={formik.touched.secondName && Boolean(formik.errors.secondName)}
          helperText={formik.touched.secondName && formik.errors.secondName}
        />
        <TextField
          id="emailSignUp"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="passwordSignUp"
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordConfirm &&
            Boolean(formik.errors.passwordConfirm)
          }
          helperText={
            formik.touched.passwordConfirm && formik.errors.passwordConfirm
          }
          label="Confirm Password"
        />
        <CustomButton disabled={loading} type="submit">
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
