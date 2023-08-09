import React, { useState, useEffect } from "react";
import axios from "axios";
import CharatcerSheet from "./Componants/header/header";
import LoginButton from "./Componants/Buttons/LogIn";
import LogoutButton from "./Componants/Buttons/LogOut";
import LogoutButton from "./Componants/Buttons/RegisterButton";
import Profile from "./Componants/Buttons/Profile";
import CharatcerSheet from "./Componants/CharatcerSheet";
import CharatcerSheet from "./Componants/footer/footer";

export default function Main() {
  const [CharacterSheets, setCharacterSheet] = useState([]);

  useEffect(() => {
    getCharacterSheet();
  }, []);

  async function getCharacterSheet() {
    let API = "http://localhost:9000/sheets";
    const result = await axios.get(API);
    console.log(result.data);
    setCharacterSheet(result.data);
  }

  const handleAddCharacterSheet = async (newMovieFormData) => {
    const res = await axios.post(
      "http://localhost:9000/sheets",
      newMovieFormData
    );
    setCharacterSheet([...CharacterSheets, res.data]);
  };

  const handleDelete = async (id) => {
    console.log("clicked");
    const res = await axios.delete(
      `http://localhost:9000/sheets/${id}`
    );
    console.log(res);
    getCharacterSheet();
  };

  const handleUpdateCharacterSheet = async (CharacterSheets) => {
    await axios.put(
      `http://localhost:9000/sheets/${CharacterSheets._id}`,
      CharacterSheets
    );
    getCharacterSheet();
  };

  return (
    <div>
      <Form onSubmitFunc={handleAddCharacterSheet} />
      <h3>This is my Main!</h3>
      <MovieCard
        CharacterSheets={CharacterSheets}
        handleDelete={handleDelete}
        handleUpdateCharacterSheet={handleUpdateCharacterSheet}
      />
    </div>
  );
}
