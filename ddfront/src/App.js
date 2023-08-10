import "./Reset.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./Pages/AboutUs";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CSheet from "./Pages/CSheet";
import SavedCSheet from "./Pages/SavedCSheet";

function App() {
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
      "http://localhost:9000/sheets",
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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/CSheet"
            element={<CSheet handleAddSheet={handleAddSheet} />}
          />
          <Route
            path="/SavedCSheet"
            element={
              <SavedCSheet
                sheets={sheets}
                handleDelete={handleDelete}
                handleUpdateSheet={handleUpdateSheet}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
