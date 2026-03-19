import { useEffect, useState } from "react";
import type User from "../../types/User";
import axios from "axios";
import { UserCard } from "../UserCard";
import styles from "./UserList.module.css"

export const UserListt = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get<User[]>(
        "https://api.escuelajs.co/api/v1/users",
      );
      setUsers(data);
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
