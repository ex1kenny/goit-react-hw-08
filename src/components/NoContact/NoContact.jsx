import { IoIosContact } from "react-icons/io";
import css from "./NoContact.module.css";

export default function NoContact() {
  return (
    <div className={css.container}>
      <IoIosContact className={css.icon} />
      <p className={css.message}>
        You havent added a contact to your book yet
      </p>
    </div>
  );
}
