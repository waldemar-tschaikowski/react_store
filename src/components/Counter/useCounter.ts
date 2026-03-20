import { useState } from "react";

export default function useCounter() {
 const [count, setCount] = useState<number>(0);

  // hook

  function handlePlus() {
    // setCount(15);
    setCount((prev) => prev + 1);
    // console.log(count);
  }

  function handleMinus() {
    setCount((prev) => prev - 1);
  }

  function handleClear() {
    setCount(0);
  }

  return {count, handleClear, handleMinus, handlePlus};
}