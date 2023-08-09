const mongoose = require("mongoose");
require("dotenv").config();

const DdSheet = require("./sheets/sheets.js");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await DdSheet.create({
    Name: "Tim",
    Race: "Elf",
    Role: "Ranger",
    Alignment: "Lawful Evil",
  });

  console.log("Created a new character.");
  mongoose.disconnect();
}

seed();
