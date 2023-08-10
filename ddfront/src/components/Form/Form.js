import React, { useState } from "react";

export default function Form({ onSubmitFunc, sheet }) {
  const [formData, setFormData] = useState(
    sheet ?? {
      Name: "",
      Race: "",
      Role: "",
      Alignment: "",
    }
  );

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const submit = (event) => {
    event.preventDefault();
    onSubmitFunc(formData);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          placeholder="Character Name"
          onChange={handleChange}
          name="Name"
          value={formData.Name}
        ></input>
        <select onChange={handleChange} name="Race">
          <option disabled selected value="Pick your Race">
            Pick your Race
          </option>
          <option value="Vampire">Vampire</option>
          <option value="Warewolf">Warewolf</option>
          <option value="Witch">Witch</option>
          <option value="Zombie">Zombie</option>
        </select>

        <select onChange={handleChange} name="Role">
          <option disabled selected value="Pick your Role">
            Pick your Role
          </option>
          <option value="Tank">Tank</option>
          <option value="DPS">DPS</option>
          <option value="Black Mage">Ranged DPS</option>
          <option value="Healer">Healer</option>
        </select>
        <select onChange={handleChange} name="Alignment">
          <option disabled selected value="Pick your Alignment">
            Pick your Alignment
          </option>
          <option value="Rebal Scum">Rebal Scum</option>
          <option value="FOR THE FJORD!!">FOR THE FJORD!!</option>
          <option value="Money Money Money">Money Money Money</option>
          <option value="We don't really have a label for it.">
            We don't really have a label for it.
          </option>
        </select>
        <button type="submit">{sheet ? "Update" : "Add Sheet"}</button>
      </form>
    </div>
  );
}
