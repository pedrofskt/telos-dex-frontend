import React from 'react'
import './index.css'
import image from './Pokeball.png'


function Home() {
  return (
    <header className='header'>
      <div className='headerTitle'>
      <img src={image} alt="" />
      <h1>Pokédex</h1>
      </div>
      <div>
      </div> 
    </header>
  )
}

export default Home