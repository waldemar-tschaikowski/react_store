import {useToggle} from "./useToggle";

export const ToggleSwitchButton: React.FC = () => {
  const { isOn, toggle } = useToggle(false);
  
  return (
    <div>
      <span>{isOn ? "ON" : "OFF"}</span>
      <button onClick={toggle}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};
