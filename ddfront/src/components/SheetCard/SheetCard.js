import React from "react";

export default function SheetCard({ sheets, handleDelete, handleUpdateSheet }) {
  return (
    <div>
      {sheets?.map((sheet) => {
        return (
          <div key={sheet.id}>
            <div>
              <p onClick={() => handleDelete(sheet._id)}>x</p>
              <h3>{sheet.Name}</h3>
              <p>
                {sheet.Race}, {sheet.Role}, {sheet.Alignment}
              </p>
            </div>
            {/* {<Form onSubmitFunc={handleUpdateSheet} sheet={sheet} />} */}
          </div>
        );
      })}
    </div>
  );
}
