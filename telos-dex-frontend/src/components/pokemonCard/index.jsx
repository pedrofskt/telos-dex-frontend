import React, { useContext } from 'react'
import './index.css'
import image from './image.png'
import { PokemonContext } from '../../contexts/PokemonContext'
import { Link } from 'react-router-dom'

function PokemonCard() {
  const [pokemons, setPokemons] = useContext(PokemonContext)

  return (
    <div className='Pokemoncard'>
      {pokemons.map((pokemon, key) =>{
        <section key={key}>
        <div className='PokemonNumber' >
        <h1>#{pokemon.game_indices[0].game_index}</h1>
        </div>
        <div className='Pokemon'>
        <Link to="/Pokemons"><img src={pokemon.sprites.other.home.front_default} alt="" /></Link>
        <h2>{pokemon.name}</h2>
        </div>
        </section>
      })}
      
      
    </div>
  )
}

export default PokemonCard