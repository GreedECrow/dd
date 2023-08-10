
import React from "react";
import Form from "../components/Form/Form";

export default function CSheet({handleAddSheet}) {
  return (
    <div>
      <p>Character Creator</p>
      <Form onSubmitFunc={handleAddSheet} />
    </div>
  );
  }