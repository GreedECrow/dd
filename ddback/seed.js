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

  await DdSheet.create({
    Name: "Danger House",
    Race: "Vampire",
    Role: "Healer",
    Alignment: "Hungry all the time",
  });

  await DdSheet.create({
    Name: "Fish Master",
    Race: "Zombie",
    Role: "Tank",
    Alignment: "Braaaaaaains",
  });

  await DdSheet.create({
    Name: "Dank Memes",
    Race: "Dank Magician",
    Role: "Dank Mage",
    Alignment: "Chaotic Dank",
  });

  console.log("Created a new character.");
  mongoose.disconnect();
}

seed();
