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
    response.status(200).json({welcome: "If you see this, something went right...... But why?"})
})

app.get('/movies', async (request,response) => {
    console.log(request)
    try {
        const movies = await Movie.find()
        response.status(200).json(movies)
    } catch (err) {
        console.log(err)
        response.status(404).json(err)
    }
})

app.post('/movies', async(request, response) => {
    try {
        const newMovie = await Movie.create(request.body)
        response.status(200).json(newMovie)
    } catch (error) {
        response.status(500).json(error)
    }
})

app.put('/movies/:id', async  (request, response) => {
    console.log(request.params.id);
    try {
        await Movie.findByIdAndUpdate(request.params.id, request.body);
        response.status(204).send()
    } catch (err) {
        response.send(err)
    }
})

app.delete('/movies/:id' , async (request, response) => {
    console.log(request)
    try {
        const id = request.params.id;
        console.log(id)
        const deletedMovie = await Movie.findByIdAndDelete(id)
        response.status(200).json(deletedMovie)
    } catch (err) {
        response.status(500).json(err)
    }
})

app.listen(PORT,()=>console.log(`POWER LEVEL OVER ${PORT}`));

