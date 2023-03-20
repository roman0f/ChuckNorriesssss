import React from 'react'
import '../styles/Joke.css'

const Joke = ({joke}) => {
  return (
    <div>
      <p>{joke}</p>
    </div>
  )
}

export default Joke
