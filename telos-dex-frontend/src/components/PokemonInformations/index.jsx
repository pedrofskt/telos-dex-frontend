import React from 'react'
import image from './image.png'
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import Divider from '@mui/material/Divider';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';


function PokemonInformations() {
  return (
    <div className='PokemonInformations'>
        <div className='PokeInformationsImg'>
            <img src={image} alt="" />
        </div>
        <div className='PokemonType'>
            <div className='type1'> Grass</div>
            <div className='type2'> Poison</div>
        </div>
    <h2>About</h2>
    <div className='PokemonAbout'>
        <div className='weight'>
            <h3><BalanceOutlinedIcon sx={{
                width:"10.76px",
                height:"12.33px",
            }}/> 6,9kg</h3>
            <h4>Weight</h4>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem sx={{
            background: "#E0E0E0",
            width: "1px",
            height: "48px",
        }}/>
        <div className='weight'>
            <h3><HeightOutlinedIcon sx={{
                width:"10.76px",
                height:"12.33px",
            }}/> 0,7 m</h3>
            <h4>Height</h4>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem sx={{
            background: "#E0E0E0",
            width: "1px",
            height: "48px",
        }}/>
        <div className='weightLast'>
            <h3>Chlorophyll <br/>
Overgrow</h3>
            <h4>Moves</h4>
        </div>
    </div>
        <h2>Base Stats</h2>
        <div className='BaseStatsPokemon'>
            <div className='StatsName'>
                <h4>HP</h4>
                <h4>ATK</h4>
                <h4>DEF</h4>
                <h4>SATK</h4>
                <h4>SDEF</h4>
                <h4>SPD</h4>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem sx={{
            background: "#E0E0E0",
            width: "1px",
            height: "96px",
        }}/>
            <div className='StatsNumber'>
                <h4>045</h4>
                <h4>049</h4>
                <h4>049</h4>
                <h4>065</h4>
                <h4>065</h4>
                <h4>045</h4>
            </div>
        </div>
    </div>
  )
}

export default PokemonInformations