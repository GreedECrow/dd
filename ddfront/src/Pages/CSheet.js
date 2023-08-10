import React from "react";
import Form from "../components/Form/Form";

export default function CSheet({ handleAddSheet }) {
  return (
    <div>
      <h2>Character Creator</h2>
      <Form onSubmitFunc={handleAddSheet} />
    </div>
  );
}
