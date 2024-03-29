import css from "./RegistrationNav.module.css";
import { NavLink } from "react-router-dom";

export default function RegistrationNav() {
  return (
    <>
      <div className={css.container}>
        <NavLink className={css.navLink} to="/register">
          Register
        </NavLink>
        <NavLink className={css.navLink} to="/login">
          Login
        </NavLink>
      </div>
    </>
  );
}
