import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import PokemonProvider from './contexts/PokemonProvider'


function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<PokemonProvider><Home/></PokemonProvider>} path="/" exact/>
            <Route element={<PokemonProvider><Pokemons/></PokemonProvider>} path="/Pokemons" />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes