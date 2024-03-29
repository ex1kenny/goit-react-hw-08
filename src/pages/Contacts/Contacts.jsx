import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/selectorsforApp";

import NoContact from "../../components/NoContact/NoContact";
import css from "./Contacts.module.css";
import { ErrorMessage } from "formik";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SpinLoader from "../../components/SpinLoader/SpinLoader";
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
