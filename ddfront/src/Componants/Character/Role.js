import React from "react";

function MyRole() {
  const [race, setRole] = useState("");
  return (
    <form>
      <select onChange={(e) => setRace(e.target.value)}>
        <option disabled selected value="Pick your Race">Pick your Race</option>
        <option value="Tank">Tank</option>
        <option value="DPS">DPS</option>
        <option value="Ranged DPS">Ranged DPS</option>
        <option value="Healer">Healer</option>
      </select>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyRole />);
