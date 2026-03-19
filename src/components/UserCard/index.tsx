import type { FC } from "react";
import type User from "../../types/User";
import styles from "./USerCard.module.css";
import { Link } from "react-router-dom";

export const UserCard: FC<User> = ({ email, name, avatar, id }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>
        <Link to={`/users/${id}`}>{name}</Link>
      </h3>
      <p className={styles.email}>{email}</p>
      <img src={avatar} alt={name} className={styles.image} />
    </div>
  );
};
