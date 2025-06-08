import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  const { id, name, phone } = contact;

  const handleDelete = () => {
    if (window.confirm(`Delete ${name}?`)) {
      onDelete(id);
    }
  };

  return (
    <li className={css.item}>
      <p className={css.text}>
        <span>{name}</span>: <span>{phone}</span>
      </p>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
