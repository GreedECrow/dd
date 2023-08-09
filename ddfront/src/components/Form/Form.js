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
    setFormData({ ...formData, [event.target.Name]: event.target.value });
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
          Name="Name"
          value={formData.Name}
        ></input>
        <input
          placeholder="Character Race"
          onChange={handleChange}
          Name="Race"
          value={formData.Race}
        ></input>
        <input
          placeholder="Character Role"
          onChange={handleChange}
          Name="Role"
          value={formData.Role}
        ></input>
        <input
          placeholder="Character Alignment"
          onChange={handleChange}
          Name="Alignment"
          value={formData.Alignment}
        ></input>
      </form>
    </div>
  );
}
