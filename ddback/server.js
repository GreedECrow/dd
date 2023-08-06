const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
const dotenv = require("dotenv");

mongoose.connect(process.env.DATABASE_URL).then(() => console.log('DB Connected'))
const PORT = process.env.PORT||9000
const app = express();
app.use(cors());
app.use(bp.json());

app.get('/', (request, response) => {
    response.status(200).json({welcome: "You've made it!"})
})
app.listen(PORT,()=>console.log(`POWER LEVEL OVER ${PORT}`));

