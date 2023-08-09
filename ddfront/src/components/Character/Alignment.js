import React from "react";

function MyAlignment() {
  const [race, setRace] = useState("");
  return (
    <form>
      <select onChange={(e) => setAlignment(e.target.value)}>
        <option disabled selected value="Pick your Alignment">Pick your Alignment</option>
        <option value="Rebal Scum">Rebal Scum</option>
        <option value="FOR THE FJORD!!">FOR THE FJORD!!</option>
        <option value="Money Money Money">Money Money Money</option>
        <option value="We don't really have a label for it.">We don't really have a label for it.</option>
      </select>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyAlignment />);

MyAlignment();
