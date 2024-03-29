import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { loginIn } from "../../redux/auth/authOps";
import { useState } from "react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(loginIn(values));
    actions.resetForm();
  };

  const pasId = useId();
  const LogID = useId();
  const LogSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.submit();
    }
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LogSchema}
      >
        <Form onKeyPress={handleKeyPress}>
          <label htmlFor={LogID} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={LogID}
            className={css.field}
            disabled={showPassword}
          />
          <ErrorMessage name="email" component="span" className={css.error} />
          <label htmlFor={pasId} className={css.label}>
            Password
          </label>
          <div className={css.passwordContainer}>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              id={pasId}
              className={css.field}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className={`${css.toggleButton} ${
                showPassword ? css.show : css.hide
              }`}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
          <button className={css.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
