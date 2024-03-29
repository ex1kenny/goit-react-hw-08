import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectToDo } from "../../redux/selectorsforApp";

export default function ContactList() {
  const contacts = useSelector(selectToDo);

  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
        <li className={css.list} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
