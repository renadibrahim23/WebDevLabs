import React, { useState } from 'react'
import './style.css'

const App = () => {
  const [movies, setMovies] = useState([])      // list of movies
  const [title, setTitle] = useState('')        // movie title input
  const [comment, setComment] = useState('')    // comment input
  const [rating, setRating] = useState('')      // rating input

  function addMovie() {
    if (!title || !comment || !rating) return alert("Please fill all fields")
    const newMovie = { title, comment, rating }
    setMovies([...movies, newMovie])            // add to the array
    setTitle('')                                // clear inputs
    setComment('')
    setRating('')
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a Movie</h2>

      <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Rating (1-10)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />

      <button onClick={addMovie}>Add</button>

      <h3>Movie List</h3>
      <ul>
        {movies.map((m, index) => (
          <li key={index}>
            <strong>{m.title}</strong> — {m.comment} (⭐ {m.rating}/10)
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
