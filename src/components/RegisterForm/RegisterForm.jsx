import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/authOps";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

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
          <Field
            type="password"
            name="password"
            id={pasID}
            className={css.field}
          />
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
