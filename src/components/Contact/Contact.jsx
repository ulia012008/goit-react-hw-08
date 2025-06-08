import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  const { id, name, phone } = contact;

  return (
    <li className={css.item}>
      <p className={css.text}>
        <span>{name}</span>: <span>{phone}</span>
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
