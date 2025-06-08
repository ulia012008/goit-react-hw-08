import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

export default function ContactsPage() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Your Contacts</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
