import { useState } from "react";
import { Button } from "../ui/Button/Button";

export const Counter = () => {
  const headingText = "Counter";
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

  return (
    <div>
      <h2>{headingText}</h2>
      <button type="button" onClick={handleMinus}>
        -
      </button>
      <div>Count: {count}</div>
      <Button onClick={handlePlus}>+</Button>
      <Button onClick={handleClear} variant="danger">
        Clear
      </Button>
    </div>
  );
};
