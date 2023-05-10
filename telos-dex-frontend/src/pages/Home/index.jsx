import React from 'react'
import './index.css'
import image from './Pokeball.png'
import SearchInput from '../../components/SearchInput'
import SortButton from '../../components/SortButton'
import PokemonCard from '../../components/pokemonCard'


function Home() {
  return (
    <body>
    <header className='header'>
      <div className='headerTitle'>
      <img src={image} alt="" />
      <h1>Pokédex</h1>
      </div>
      <div className='SearchContainer'>
        <SearchInput/>
        <SortButton/>
      </div> 
    </header>
    <main>
      <div className='pokemonContainers'>
        <div className='pokemonCards'>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        <PokemonCard/>
        </div>
      </div>
    </main>
    </body>
  )
}

export default Home