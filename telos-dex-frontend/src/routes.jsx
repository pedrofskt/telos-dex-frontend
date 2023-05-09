import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'


function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" exact/>
            <Route element={<Pokemons/>} path="/Pokemons" />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes