import { useEffect, useState } from "react";
import { fetchDog } from "./api";

// Один из возможных вариантов
export const RandomDog = () => {
  const [shouldFetch, setShouldFetch] = useState(true);
  const [picture, setPicture] = useState("");

  useEffect(() => {
    async function handleFetchDog() {
      const image = await fetchDog();
      setPicture(image);
    }

    handleFetchDog();
  }, [shouldFetch]);

  return (
    <div>
      <button type="button" onClick={() => setShouldFetch((prev) => !prev)}>
        New dog
      </button>
      <img src={picture} alt="dog" />
    </div>
  );
};
