import React, { useContext } from 'react'
import './index.css'
import image from './Pokeball.png'
import SearchInput from '../../components/SearchInput'
import SortButton from '../../components/SortButton'
import PokemonCard from '../../components/pokemonCard'
import SortModal from '../../components/SortModal'
import { useState } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'


function Home() {
  const [open, setOpen] = useState(false);

  return (
    <body>
    <header className='header'>
      <div className='headerTitle'>
      <img src={image} alt="" />
      <h1>Pokédex</h1>
      </div>
      <div className='SearchContainer'>
        <SearchInput/>
        <SortButton onClick={() => {setOpen(true)}}/>
      </div> 
    </header>
    <main>
      <div className='pokemonContainers'>
        <div className='pokemonCards'>
            <PokemonCard/>

        </div>
      </div>
    </main>
    <SortModal open={open} setOpen={setOpen} />
    </body>
  )
}

export default Home