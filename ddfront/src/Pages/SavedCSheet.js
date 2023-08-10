import React from "react";

export default function SavedCSheet({
  sheets,
  handleDelete,
  handleUpdateSheet,
}) {
  return (
    <div>
      <SheetCard
        sheets={sheets}
        handleDelete={handleDelete}
        handleUpdateSheet={handleUpdateSheet}
      />
    </div>
  );
}
