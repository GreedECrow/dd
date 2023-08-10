import React from "react";
import SheetCard from "../components/SheetCard/SheetCard";

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
