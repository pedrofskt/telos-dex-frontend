import React from 'react'
import './index.css'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PokemonInformations from '../../components/PokemonInformations';


function index() {
  return (
    <body className='bodyPokemon'>
    <header className='HeaderPokemon'>
      <div className='HeaderPokemonContent'>
        <ArrowBackOutlinedIcon sx={{
            width: "20.93px",
            height: "20.53px",
        }}/>
        Bulbasaur
      </div>
      <div className='HeaderPokemonContentId'>
        #001
      </div>
    </header>
    <main>
      <section className='PokemonSectionsInformations'>
        <PokemonInformations/>
      </section>
    </main>
    
    </body>
  )
}

export default index