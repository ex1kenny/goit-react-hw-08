/* eslint-disable react/prop-types */
import { useState } from "react";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps.js";
import { useDispatch } from "react-redux";
import Editor from "../Editor/Editor";
import PhoneEditor from "../ PhoneEditor/ PhoneEditor";

export default function Contact({ data: { name, number, id } }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.list}>
        <span>
          <FaUser />
          {isEditing ? (
            <Editor
              initialValue={name}
              contactId={id}
              onClose={() => setIsEditing(false)}
            />
          ) : (
            <p
              className={css.item}
              onClick={() => {
                setIsEditing(true);
              }}
            >
              {name}
            </p>
          )}
        </span>
        <span>
          <BsFillTelephoneFill />
          {isEditing ? (
            <PhoneEditor
              initialValue={number}
              contactId={id}
              onClose={() => setIsEditing(false)}
            />
          ) : (
            <p
              onClick={() => {
                setIsEditing(true);
              }}
              className={css.item}
            >
              {number}{" "}
            </p>
          )}
        </span>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
