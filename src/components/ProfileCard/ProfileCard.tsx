import styles from "./ProfileCard.module.css";
import type { FC } from "react";

interface Props {
  name: string;
  description: string;
  avatar: string;
}

export const ProfileCard: FC<Props> = ({ name, description, avatar }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.profileName}>{name}</h2>
      <p>{description}</p>
      <img src={avatar} alt="User profile" />
    </div>
  );
};

// Разные подходы к стилизации приложения
// BEM - CSS modules - Tailwind/Bootstrap - css in js Styled components