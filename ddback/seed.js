const mongoose = require("mongoose");
require("dotenv").config();

const dd = require("./sheets/sheets");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Movie.create({
    name: "",
    Race: "",
    Role: "",
    Alignment: "",
  });

  console.log("Created a new movie");
  mongoose.disconnect();
}

seed();
