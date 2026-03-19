import { useEffect, useState } from "react";
import { fetchDog } from "./api";

export const RandomDog = () => {
  const [picture, setPicture] = useState("");
  async function handleFetchDog() {
    const image = await fetchDog();
    setPicture(image);
  }

  useEffect(() => {
    handleFetchDog();
  }, []);

  return (
    <div>
      <button type="button" onClick={handleFetchDog}>
        New Dog
      </button>
      <img src={picture} alt="dog" />
    </div>
  );
};

// export const RandomDog = () => {
//   const [picture, setPicture] = useState("");
//   async function handleFetchDog() {
//     const image = await fetchDog();
//     setPicture(image);
//   }
//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     handleFetchDog();
//   }, []);

//   return (
//     <div>
//       <button type="button" onClick={handleFetchDog}>
//         New dog
//       </button>
//       <img src={picture} alt="dog" />
//     </div>
//   );
// };
