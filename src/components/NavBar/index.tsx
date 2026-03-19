import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import clsx from "clsx";

export default function NavBar() {
  const getClasses = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.active);
  return (
    <nav className={styles.navbar}>
      <NavLink to="/counter" className={getClasses}>
        Counter
      </NavLink>
      <NavLink to="/" className={getClasses}>
        Home
      </NavLink>

       <NavLink to="/categories/create" className={getClasses}>
        Create Category
      </NavLink>

      <NavLink to="/space-mission" className={getClasses}>
        Space mission
      </NavLink>
      <NavLink to="/about" className={getClasses}>
        About us
      </NavLink>
      <NavLink to="/contacts" className={getClasses}>
        Contacts
      </NavLink>
      <NavLink to="/profile" className={getClasses}>
        Profile
      </NavLink>
      <NavLink to="/users" className={getClasses}>
        Users
      </NavLink>
      <NavLink to="/signup" className={getClasses}>
        Sign up
      </NavLink>
      <NavLink to="/signin" className={getClasses}>
        Sign in
      </NavLink>
    </nav>
  );
}
