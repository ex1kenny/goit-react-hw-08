import { useState } from "react";
import css from "./Editor.module.css";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/contactsOps.js";

export default function Editor({ contactId, initialValue, onClose }) {
  const [text, setText] = useState(initialValue);
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateContact({
        id: contactId,
        name: text,
      })
    )
      .unwrap()
      .then(() => onClose());
  };

  return (
    <>
      <form className={css.form} onSubmit={handelSubmit}>
        <input
          className={css.formInput}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={css.btn} type="submit">
          Save
        </button>
      </form>
    </>
  );
}
