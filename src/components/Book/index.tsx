import type { FC } from "react";
import BookHeading from "./BookHeading";
import styles from "./Book.module.css";

interface Props {
  avatar: string;
  year: number;
  author: string;
  title: string;
}

const Book: FC<Props> = ({ avatar, year, author, title }) => {
  return (
    <div className={styles.card}>
      <BookHeading title={title} />
      <p>{year}</p>
      <img src={avatar} alt={title} />
      <p>{author}</p>
    </div>
  );
};

export default Book;

// ui kit