import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllPokemon from "./components/AllPokemon";
import DetailPokemon from "./components/DetailPokemon"
import Home from "./components/Home"
import Fight from "./components/Fight"


function App() {
  const[pokeApi, setPokeApi]= useState([]);
  const url ='https://pokefight-g03-api.herokuapp.com/pokemon';
  const [computerPokemon, setComputerPokemon] = useState({
    "HP": 0,
    "Attack": 0,
    "Defense": 0,
    "Sp. Attack":0,
    "Sp. Defense":0,
    "Speed": 0
  })

  const getComputerPokemon = (res) => {
    const computerRand = Math.floor(Math.random()*res.length);
    if(res.length>0){
      const addComputerPokemon = res[computerRand];
      setComputerPokemon(addComputerPokemon.base)
      console.log("hier" + computerPokemon)
    }
  }

  const getFetch = () => {
    return fetch(url)
      .then((res) => {
        // console.log(res);
        // console.log(data);
        return res.json();
      })
      .then((res) => {
        setPokeApi(res)
        return res;
      });
  };

  useEffect(() => {
    try {
      getFetch().then((res)=>getComputerPokemon(res));
    } catch (error) {
      console.log("Error: " + error);
    }

  }, []);
  

  
  // console.log(pokeApi)
  console.log(computerPokemon)



  return (
<div>
   <Routes>
    <Route path="/pokemon/:id/fight" element={<Fight allData={pokeApi} pokemon={computerPokemon} setPokemon={setComputerPokemon}/>}/>    
    <Route path="/pokemon/:id" element={<DetailPokemon allData={pokeApi} />} />
    <Route path="/pokemon" element={<AllPokemon allData={pokeApi} />} />   
    <Route path="/" element={<Home />} />   
   </Routes>
</div>
  );
}

export default App;