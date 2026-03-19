import { NavLink, Outlet } from "react-router-dom";
import styles from "./ProfileLayout.module.css";

export default function ProfileLayout() {
  return (
    <div className={styles.container}>
      <aside className={styles.leftAside}>
        <nav className={styles.navItems}>
          <NavLink to="/profile/settings">Settings</NavLink>
          <NavLink to="/profile/personal-info">Personal information</NavLink>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}
