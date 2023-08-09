const mongoose = require("mongoose");

const { Schema } = mongoose;

const DDSchema = new Schema({
  Name: String,
  Race: String,
  Role: String,
  Alignment: String,
});

const DdSheet = mongoose.model("DD", DDSchema);

module.exports = DdSheet;
