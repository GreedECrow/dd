const mongoose = require('mongoose');
require('dotenv').config();

const dd = require('./sheets/sheets');


mongoose.connect(process.env.DATABASE_URL)

async function seed() {

  await Movie.create({
    name: 'Primer',
    img_url: 'https://posters.movieposterdb.com/05_09/2004/0390384/l_54699_0390384_b8bbcab7.jpg',
    director: 'Shane Carruth',
    year: 2001
  })

  console.log('Created a new movie');
  mongoose.disconnect();
}

seed();