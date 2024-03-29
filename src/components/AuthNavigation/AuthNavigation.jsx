import css from "./AuthNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";

export default function AuthNavigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.con}>
      <nav className={css.wrapper}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
}
