import axios from "axios";
import { useEffect, useState } from "react";
import type User from "../../types/User";

export default function useProfile() {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    async function fetchProfile() {
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      setUser(data);
    }
    fetchProfile();
  }, []);
  return { user };
}
