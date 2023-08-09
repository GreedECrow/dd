import React, { useState } from "react";

export default function CharacterSheet({ onSubmitFunc, movie }) {
  const [formData, setFormData] = useState(
    movie ?? {
      name: "",
      race: "",
      role: "",
      alignment: "",
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
          placeholder="character name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        ></input>
        <input
          placeholder="race"
          onChange={handleChange}
          name="race"
          value={formData.race}
        ></input>
        <input
          placeholder="race"
          onChange={handleChange}
          name="race"
          value={formData.race}
        ></input>
        <input
          placeholder="alignment"
          onChange={handleChange}
          name="alignment"
          value={formData.alignment}
        ></input>
        <button type="submit">{Character ? "Update" : "Add Character"}</button>
      </form>
    </div>
  );
}
