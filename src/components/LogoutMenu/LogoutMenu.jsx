import css from "./LogoutMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOps";
import { selectUser } from "../../redux/auth/slice";

export default function LogoutMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.container}>
      <p className={css.user}>Welcome, {user.name}</p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
