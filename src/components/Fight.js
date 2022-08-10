import { useState } from "react";
import { useParams } from "react-router-dom";
import './fight.css';

const Fight = ({allData}) => {
  const {id} = useParams();

  const [playerState, setPlayerState] = useState({
    "HP": 0,
    "Attack": 0,
    "Defense": 0,
    "Sp. Attack":0,
    "Sp. Defense":0,
    "Speed": 0
  })

  const [computerState, setComputerState] = useState({
      "HP": 0,
      "Attack": 0,
      "Defense": 0,
      "Sp. Attack":0,
      "Sp. Defense":0,
      "Speed": 0
    })

  console.log(playerState);

  if(!allData[id-1]) return <p>Loading</p>;
  
  const {base, name} = allData[id-1];

  if(
    base.HP !== playerState.HP &&
    base.Attack !== playerState.Attack &&
    base.Defense !== playerState.Defense &&
    base["Sp. Attack"] !== playerState["Sp. Attack"] &&
    base["Sp. Defense"] !== playerState["Sp. Defense"] &&
    base.Speed !== playerState.Speed 
    ) setPlayerState(base);
  
  const computerRand = Math.floor(Math.random()*allData.length);
  const computerPokemon = allData[computerRand];

  if(
    computerPokemon.base.HP !== computerState.HP &&
    computerPokemon.base.Attack !== computerState.Attack &&
    computerPokemon.base.Defense !== computerState.Defense &&
    computerPokemon.base["Sp. Attack"] !== computerState["Sp. Attack"] &&
    computerPokemon.base["Sp. Defense"] !== computerState["Sp. Defense"] &&
    computerPokemon.base.Speed !== computerState.Speed
    ) setComputerState(computerPokemon.base)

  
  

  return (
    <div className="fight-container-box">
    <div className="fight-container">
      <div className="computer">
        <div>
          <h1>{computerPokemon.name.english}</h1>
          <h3>HP: {computerState.HP}</h3>
          <h3>ATK: {computerState.Attack}</h3>
          <h3>DEF: {computerState.Defense}</h3>
          <h3>SPD: {computerState.Speed}</h3>
        </div>
        <div className="button-container">
          <button className="pokemon-attack">Attack</button>
        </div>
      </div>
      <div className="player">
        <div>
          <h1>{name.english}</h1>
          <h3>HP: {playerState.HP}</h3>
          <h3>ATK: {playerState.Attack}</h3>
          <h3>DEF: {playerState.Defense}</h3>
          <h3>SPD: {playerState.Speed}</h3>
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
