import React from 'react'
import './index.css'
import image from './Pokeball.png'
import SearchInput from '../../components/SearchInput'


function Home() {
  return (
    <header className='header'>
      <div className='headerTitle'>
      <img src={image} alt="" />
      <h1>Pokédex</h1>
      </div>
      <div>
        <SearchInput/>
      </div> 
    </header>
  )
}

export default Home