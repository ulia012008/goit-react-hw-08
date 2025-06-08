import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      <ul className={css.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
        ))}
      </ul>
      {!loading && contacts.length === 0 && <p>No contacts found.</p>}
    </div>
  );
};

export default ContactList;
