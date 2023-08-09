import React from "react";
import Form from "../Form/Form";

export default function SheetCard({ sheet, handleDelete, handleUpdateSheet }) {
  return (
    <div>
      {sheet.map((sheet) => {
        return (
          <div key={sheet.id}>
            <div>
              <p onClick={() => handleDelete(sheet._id)}>x</p>
              <h3>{sheet.Name}</h3>
              <p>
                {sheet.Race}, {sheet.Role}, {sheet.Alignment}
              </p>
            </div>
            <Form onSubmitFunc={handleUpdateSheet} sheet={sheet} />
          </div>
        );
      })}
    </div>
  );
}
