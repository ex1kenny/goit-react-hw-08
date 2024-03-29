import css from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import LogoutMenu from "../LogoutMenu/LogoutMenu";
import RegistrationNav from "../RegistrationNav/RegistrationNav";

export default function NavBar() {
  const isLoggediN = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={css.left}>
        <AuthNavigation />
      </div>
      <div className={css.right}>
        {isLoggediN ? <LogoutMenu /> : <RegistrationNav />}
      </div>
    </header>
  );
}
