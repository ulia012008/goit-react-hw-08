import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.menu}>
      <p className={css.email}>Welcome, {user.email}</p>
      <button onClick={() => dispatch(logout())} className={css.button}>
        Logout
      </button>
    </div>
  );
}
