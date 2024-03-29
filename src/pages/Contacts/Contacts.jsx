import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/selectorsforApp";
import NoContact from "../NoContact/NoContact";
import css from "./Contacts.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SpinLoader from "../SpinLoader/SpinLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContact } from "../../redux/contacts/contactsOps";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const contact = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact())
      .unwrap()
      .then(() => {
        toast.success("successfully!");
      })
      .catch(() => {
        toast.error("upss something wrong!");
      });
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.p}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading ? <SpinLoader /> : contact.length === 0 && <NoContact />}
      {error && <ErrorMessage />}
      <Toaster />
    </div>
  );
}

export default App;
