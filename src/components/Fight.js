import { useState } from "react";
import { useParams } from "react-router-dom";
import './fight.css';

const Fight = ({allData, pokemon, setPokemon}) => {
  const {id} = useParams();

  const [playerState, setPlayerState] = useState({
    "HP": 0,
    "Attack": 0,
    "Defense": 0,
    "Sp. Attack":0,
    "Sp. Defense":0,
    "Speed": 0
  })

  
  console.log("fight rendered")
  
  // const [computerState, setComputerState] = useState({
  //     "HP": 0,
  //     "Attack": 0,
  //     "Defense": 0,
  //     "Sp. Attack":0,
  //     "Sp. Defense":0,
  //     "Speed": 0
  //   })
  
  const [playerHP, setPlayerHP] = useState(0)
  const [computerHP, setComputerHP] =useState(0)

  if(!allData[id-1]) return <p>Loading</p>;
  
  const {base, name} = allData[id-1];

  if(
    base.HP !== playerState.HP &&
    base.Attack !== playerState.Attack &&
    base.Defense !== playerState.Defense &&
    base["Sp. Attack"] !== playerState["Sp. Attack"] &&
    base["Sp. Defense"] !== playerState["Sp. Defense"] &&
    base.Speed !== playerState.Speed 
    ) {
      setPlayerState(base);
      setPlayerHP(base.HP);
      setComputerHP(pokemon.HP);
    }
    

  if(base.Speed < pokemon.Speed){
    setPlayerHP(prev => prev-5)
    setPokemon(prev => {
      return {
        ...prev,
        Speed: 0
      }
    })
  }



  
  const playerFight = () => {
    setComputerHP(prev => prev -5);
  }
  const computerFight = () => {
    setPlayerHP(prev => prev -5);
  }
  

  
  
  return (
    <div className="fight-container-box">
    <div className="fight-container">
      <div className="computer">
        <div>
          {/* <h1>{pokemon.name.english}</h1> */}
          <h3>HP: {computerHP}</h3>
          <h3>ATK: {pokemon.Attack}</h3>
          <h3>DEF: {pokemon.Defense}</h3>
          <h3>SPD: {pokemon.Speed}</h3>
        </div>
        <div className="button-container">
          <button onClick={computerFight} className="pokemon-attack">Attack</button>
        </div>
      </div>
      <div className="player">
        <div>
          <h1>{name.english}</h1>
          <h3>HP: {playerHP}</h3>
          <h3>ATK: {playerState.Attack}</h3>
          <h3>DEF: {playerState.Defense}</h3>
          <h3>SPD: {playerState.Speed}</h3>
        </div>
        <div className="button-container">
          <button 
            onClick={playerFight}
            className="pokemon-attack"
          >Attack</button>
        </div>
      </div>
    </div>
    </div>
  )
} 

export default Fight;
