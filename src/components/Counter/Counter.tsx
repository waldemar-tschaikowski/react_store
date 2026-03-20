import { ToggleSwitchButton } from "../ToggleSwitchButton/ToggleSwitchButton";
import { Button } from "../ui/Button/Button";
import useCounter from "./useCounter";

export const Counter = () => {
  const headingText = "Counter";
  const { count, handleClear, handleMinus, handlePlus } = useCounter();

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
      <ToggleSwitchButton />
    </div>
  );
};
