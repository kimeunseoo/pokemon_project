import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./fight.css";

const Fight = ({ allData, pokemon, setPokemon, randomPokeName }) => {
  const { id } = useParams();
  const [playerState, setPlayerState] = useState({
    HP: 0,
    Attack: 0,
    Defense: 0,
    "Sp. Attack": 0,
    "Sp. Defense": 0,
    Speed: 0,
  });

  console.log("fight rendered");

  // const [computerState, setComputerState] = useState({
  //     "HP": 0,
  //     "Attack": 0,
  //     "Defense": 0,
  //     "Sp. Attack":0,
  //     "Sp. Defense":0,
  //     "Speed": 0
  //   })

  const [playerHP, setPlayerHP] = useState(0);
  const [computerHP, setComputerHP] = useState(0);
  const [fight, setFight]=useState(false);

  if (!allData[id - 1]) return <p>Loading</p>;

  const { base, name } = allData[id - 1];

  if (
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

  // if(base.Speed < pokemon.Speed){
  //   setPlayerHP(prev => prev-5)
  //   setPokemon(prev => {
  //     return {
  //       ...prev,
  //       Speed: 0
  //     }
  //   })
  // }

  // const playerFight = () => {
  //   setComputerHP(prev => prev -5);
  //   if(computerHP <= 0){
  //     setComputerHP(0);
  //   }
  // }
  // const computerFight = () => {
  //   setPlayerHP(prev => prev -5);
  //   if(playerHP <= 0){
  //     setPlayerHP(0);
  //   }
  // }

  const playerFight = () => {
    setFight(true)
    if (base.Speed > pokemon.Speed) {
      setComputerHP((prev) => prev - 15);
      if (computerHP <= 0) {
        setComputerHP(0);
      }
    } else {
      setPlayerHP((prev) => prev - 15);
      if (playerHP <= 0) {
        setPlayerHP(0);
      }
    }
    setTimeout(() => {
      if (base.Speed > pokemon.Speed) {
        setPlayerHP((prev) => prev - 13);
        if (playerHP <= 0) {
          setPlayerHP(0);
        }
      } else {
        setComputerHP((prev) => prev - 13);
        if (computerHP <= 0) {
          setComputerHP(0);
        }
      }
    }, 1000);

    if(fight === true && playerHP <= 0){
      alert('your Lose')
    }
    if(fight === true && computerHP <= 0){
      alert('Your Win')
    }
  };



  return (
    <div className="background-fight">
      <div className="fight-container-box">
        <div className="player-container">
          <div>
            <h1 className="pokemon-title"> My Pokemon </h1>
          </div>
          <div>
            <h1 className="pokemon-name"> {name.english}</h1>
          </div>
          <div className="player">
            <div className="pokemon-base-box">
              <h3 className="pokemon-base">HP: {playerHP}</h3>
              {/* <h3 className="pokemon-base">ATK: {playerState.Attack}</h3>
              <h3 className="pokemon-base">DEF: {playerState.Defense}</h3> */}
              <h3 className="pokemon-base">SPD: {playerState.Speed}</h3>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button onClick={playerFight} className="pokemon-attack">
            Attack
          </button>
        </div>

        <div className="computer-container">
          <div>
            <h1 className="pokemon-title">Computer Pokemon</h1>
          </div>
          <div>
            <h1 className="pokemon-name">{randomPokeName.english}</h1>
          </div>
          <div className="computer">
            <div className="pokemon-base-box">
              <h3 className="pokemon-base">HP: {computerHP}</h3>
              {/* <h3 className="pokemon-base">ATK: {pokemon.Attack}</h3>
              <h3 className="pokemon-base">DEF: {pokemon.Defense}</h3> */}
              <h3 className="pokemon-base">SPD: {pokemon.Speed}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const doLogin =()=>{
//   // sende logindaten an api endpunkt
//   const requestOptions = {
//     method : "POST",
//     headers : {"content-type":"application/json"},
//     body:JSON.stringify({
//       // username:"ben",
//       // password:"chicken"
//       username: loginUser.current.value,
//       password: loginPw.current.value,
//     }),
//   };
//   fetch("https://wbs-simple-auth.herokuapp.com/auth/login", requestOptions)
//   .then((res)=>res.headers)
//   // .then((data)=>console.log(data))
// }
// 이 결과값을 백핸드 서버에 포스트 전달- > 그 백핸드 서버에는 몽고
export default Fight;
