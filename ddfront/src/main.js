import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Buttons from './Componants/Buttons'
import Character from './Character/CharacterSheet'

export default function Main() {
    const [CharacterSheet, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    },[])



    async function getMovies() {
        let API = 'http://localhost:4242/CharacterSheet'
        const result = await axios.get(API)
        console.log(result.data)
        setMovies(result.data)
    }

    
    const handleAddMovie = async newMovieFormData => {
        const res = await axios.post('http://localhost:4242/CharacterSheet', newMovieFormData)
        setMovies([...CharacterSheet, res.data])
    }

    
    const handleDelete = async (id) => {
        console.log('clicked')
        const res = await axios.delete(`http://localhost:4242/CharacterSheet/${id}`)
        console.log(res)
        getMovies()
    }

    const handleUpdateMovie = async (movie) => {
        await axios.put(`http://localhost:4242/CharacterSheet/${movie._id}`, movie)
        getMovies();
    }


  return (
    <div>
        <Form onSubmitFunc={handleAddMovie}/>
        <h3>This is my Main!</h3>
        <MovieCard CharacterSheet={CharacterSheet} handleDelete={handleDelete} handleUpdateMovie={handleUpdateMovie}/>
    </div>
  )
}