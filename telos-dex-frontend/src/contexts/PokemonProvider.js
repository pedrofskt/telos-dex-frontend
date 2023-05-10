import React, { useEffect, useState } from 'react'
import axios from "axios"
import { PokemonContext } from './PokemonContext';

export default function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([])
    
    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=9").then(
            (response) =>{
                response.data.results.map( async (pokemon) => {
                    await axios.get(pokemon.url).then((pokemon) => {
                        setPokemons((prev) => [...prev, pokemon.data]);
                      });
                    });
            }).catch((error) => {
                console.error(error);
            });
    }, []);

  return ( <PokemonContext.Provider value={[pokemons, setPokemons]}>
    {children}
  </PokemonContext.Provider>
    
  )
}
