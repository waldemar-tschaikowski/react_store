import { useId, useState } from "react";

export default function SpaceMission() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("Mars");
  const nameInputId = useId();
  const planetId = useId();

  return (
    <div>
      <h2>Space mission</h2>
      <label htmlFor={nameInputId}>Name</label>
      <input
        id={nameInputId}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        id={planetId}
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
      >
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>

      <p>
        Astronaut {name} is heading to {planet}
      </p>
    </div>
  );
}
