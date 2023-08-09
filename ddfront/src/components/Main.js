import "./Reset.css";
import "./App.css";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import SheetCard from "./SheetCard/SheetCard";
import Form from "./Form/Form";

export default function Main() {
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    getSheets();
  }, []);

  async function getSheets() {
    let API = "http://localhost:9000/sheets";
    const result = await axios.get(API);
    console.log(result.data);
    setSheets(result.data);
  }

  const handleAddSheet = async (newSheetFormData) => {
    const res = await axios.post(
      "http://localhost:9000/sheet",
      newSheetFormData
    );
    setSheets([...sheets, res.data]);
  };

  const handleDelete = async (id) => {
    console.log("clicked");
    const res = await axios.delete(`http://localhost:9000/sheets/${id}`);
    console.log(res);
    getSheets();
  };

  const handleUpdateSheet = async (sheet) => {
    await axios.put(`http://localhost:9000/sheets/${sheet._id}`, sheet);
    getSheets();
  };

  return (
    <div>
      <h3>This a Sheet I guess, I don't even know anymore???</h3>
      <Form onSubmitFunc={handleAddSheet} />
      <SheetCard
        sheets={sheets}
        handleDelete={handleDelete}
        handleUpdateSheet={handleUpdateSheet}
      />
    </div>
  );
}
