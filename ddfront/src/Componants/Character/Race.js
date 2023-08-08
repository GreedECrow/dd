import React from "react";

function MyRace() {
  const [race, setRace] = useState("");
  return (
    <form>
      <select onChange={(e) => setRace(e.target.value)}>
        <option disabled selected value="Pick your Race">Pick your Race</option>
        <option value="Vampire">Vampire</option>
        <option value="Warewolf">Warewolf</option>
        <option value="Witch">Witch</option>
        <option value="Zombie">Zombie</option>
      </select>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyRace />);
