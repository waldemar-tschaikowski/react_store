import { useState } from "react";

interface UseToggleReturn {
  isOn: boolean;
  toggle: () => void;
}

export function useToggle(initialValue: boolean = false): UseToggleReturn {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = () => setIsOn((prev) => !prev);

  return { isOn, toggle };
}
