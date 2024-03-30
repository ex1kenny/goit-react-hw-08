import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useState } from "react";

const LogSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const nameID = useId();
  const emailID = useId();
  const pasID = useId();
  const handleSubmit = (value, action) => {
    dispatch(register(value));
    action.resetForm();
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LogSchema}
      >
        <Form>
          <label htmlFor={nameID} className={css.label}>
            Name
          </label>
          <Field type="text" name="name" id={nameID} className={css.field} />
          <ErrorMessage name="name" component="span" className={css.error} />
          <label htmlFor={emailID} className={css.label}>
            Email
          </label>
          <Field type="email" name="email" id={emailID} className={css.field} />
          <ErrorMessage name="email" component="span" className={css.error} />
          <label htmlFor={pasID} className={css.label}>
            Password
          </label>
          <div className={css.passwordContainer}>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              id={pasID}
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
