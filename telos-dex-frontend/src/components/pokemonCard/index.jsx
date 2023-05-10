import React from 'react'
import './index.css'
import image from './image.png'

function PokemonCard() {
  return (
    <div className='Pokemoncard'>
      <div className='PokemonNumber' >
      <h1>#001</h1>
      </div>
      <div className='Pokemon'>
      <img src={image} alt="" />
      <h2>Bulbasaur</h2>
      </div>
    </div>
  )
}

export default PokemonCard