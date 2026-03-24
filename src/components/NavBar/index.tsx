import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import clsx from "clsx";
import LogoutButton from "../LogoutButton";
import useAuth from "../../hooks/useAuth";
import useCartCount from "../../hooks/useCartCount";

const getClasses = ({ isActive }: { isActive: boolean }) =>
  clsx(styles.link, isActive && styles.active);

const generalLinks = (
  <>
    <NavLink to="/counter" className={getClasses}>
      Counter
    </NavLink>
    <NavLink to="/" className={getClasses}>
      Home
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
  </>
);

const SignedInUserLinks = (
  <>
    <NavLink to="/profile" className={getClasses}>
      Profile
    </NavLink>
    <NavLink to="/users" className={getClasses}>
      Users
    </NavLink>
    <NavLink to="/categories" className={getClasses}>
      Categories
    </NavLink>
    <NavLink to="/categories/create" className={getClasses}>
      Add Category
    </NavLink>
    <LogoutButton />
  </>
);

const AuthLinks = (
  <>
    <NavLink to="/signup" className={getClasses}>
      Sign up
    </NavLink>

    <NavLink to="/signin" className={getClasses}>
      Sign in
    </NavLink>
  </>
);

export default function NavBar() {
  const { user } = useAuth();
  const {count} = useCartCount();

  return (
    <nav className={styles.navbar}>
      {generalLinks}
      {user ? SignedInUserLinks : AuthLinks}
      <span>Cart: {count}</span>
    </nav>
  );
}
