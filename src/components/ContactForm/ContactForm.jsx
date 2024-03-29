/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm() {
  const dispath = useDispatch();
  const nameId = useId();
  const numId = useId();
  const ConSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={ConSchema}
        onSubmit={(items, action) => {
          dispath(addContact(items));
          action.resetForm();
        }}
      >
        <Form>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label} htmlFor={numId}>
            Number
          </label>
          <Field className={css.field} type="tel" name="number" id={numId} />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
