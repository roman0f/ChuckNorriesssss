import React from 'react'
import '../styles/Joke.css'

const Joke = ({joke}) => {
  return (
    <div className='JokeSium'>
      <p>{joke}</p>
    </div>
  )
}

export default Joke
