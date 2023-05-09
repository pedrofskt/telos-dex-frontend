import React from 'react'
import './index.css'
import image from './Pokeball.png'
import SearchInput from '../../components/SearchInput'
import SortButton from '../../components/SortButton'


function Home() {
  return (
    <body>
    <header className='header'>
      <div className='headerTitle'>
      <img src={image} alt="" />
      <h1>Pokédex</h1>
      </div>
      <div className='Search'>
        <SearchInput/>
        <SortButton/>
      </div> 
    </header>
    <main>
      <h1>Teste</h1>
    </main>
    </body>
  )
}

export default Home