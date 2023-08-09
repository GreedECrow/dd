const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();
const DdSheets = require("./sheets/sheets")

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB Connected"));
const PORT = process.env.PORT || 9000;
const app = express();
app.use(cors());
app.use(bp.json());

app.get("/", (request, response) => {
  response
    .status(200)
    .json({ welcome: "If you see this, something went right...... But why?" });
});

app.get("/sheets", async (request, response) => {
  console.log(request);
  try {
    const sheets = await DdSheets.find();
    response.status(200).json(sheets);
  } catch (err) {
    console.log(err);
    response.status(404).json(err);
  }
});

app.post("/sheets", async (request, response) => {
  try {
    const newsheets = await DdSheets.create(request.body);
    response.status(200).json(newsheets);
  } catch (error) {
    response.status(500).json(error);
  }
});

app.put("/sheetss/:id", async (request, response) => {
  console.log(request.params.id);
  try {
    await DdSheets.findByIdAndUpdate(request.params.id, request.body);
    response.status(204).send();
  } catch (err) {
    response.send(err);
  }
});

app.delete("/sheetss/:id", async (request, response) => {
  console.log(request);
  try {
    const id = request.params.id;
    console.log(id);
    const deletedsheets = await DdSheets.findByIdAndDelete(id);
    response.status(200).json(deletedsheets);
  } catch (err) {
    response.status(500).json(err);
  }
});

app.listen(PORT, () => console.log(`POWER LEVEL OVER ${PORT}`));
