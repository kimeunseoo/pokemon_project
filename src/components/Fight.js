import { useState } from "react";
import { useParams } from "react-router-dom";
import './fight.css';

const Fight = ({allData}) => {
  const {id} = useParams();

  const [playerState, setPlayerState] = useState(0)
  const [computerState, setComputerState] = useState(0)

  if(!allData[id-1]) return <p>Loading</p>;

  const {base, name} = allData[id-1];
  if(base.HP != playerState) setPlayerState(base.HP);

  const computerRand = Math.floor(Math.random()*allData.length);
  const computerPokemon = allData[computerRand];
  if(computerPokemon.base.HP === 0) setComputerState(computerPokemon.base.HP)
    
  return (
    <div className="fight-container-box">
    <div className="fight-container">
      <div className="computer">
        <div>
          <h1>{computerPokemon.name.english}</h1>
          <h2>HP: {computerPokemon.base.HP}</h2>
          <h2>ATK: {computerPokemon.base.Attack}</h2>
          <h2>DEF: {computerPokemon.base.Defense}</h2>
          <h2>SPD: {computerPokemon.base.Speed}</h2>
        </div>
        <div className="button-container">
          <button className="pokemon-attack">Attack</button>
        </div>
      </div>
      <div className="player">
        <div>
          <h1>{name.english}</h1>
          <h2>HP: {base.HP}</h2>
          <h2>ATK: {base.Attack}</h2>
          <h2>DEF: {base.Defense}</h2>
          <h2>SPD: {base.Speed}</h2>
        </div>
        <div className="button-container">
          <button className="pokemon-attack">Attack</button>
        </div>
      </div>
    </div>
    </div>
  )
} 

export default Fight;