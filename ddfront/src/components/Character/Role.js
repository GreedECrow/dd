import React from "react";

function MyRole() {
  const [race, setRole] = useState("");
  return (
    <form>
      <select onChange={(e) => setRace(e.target.value)}>
        <option disabled selected value="Pick your Role">Pick your Role</option>
        <option value="Tank">Tank</option>
        <option value="DPS">DPS</option>
        <option value="Black Mage">Ranged DPS</option>
        <option value="Healer">Healer</option>
      </select>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyRole />);

MyRole();
