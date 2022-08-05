import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllPokemon from "./components/AllPokemon";
import DetailPokemon from "./components/DetailPokemon"


function App() {
  const[pokeApi, setPokeApi]= useState([]);
  const url ='https://pokefight-g03-api.herokuapp.com/pokemon';

  const getFetch = () => {
    fetch(url)
      .then((res) => {
        // console.log(res);
        // console.log(data);
        return res.json();
      })
      .then((res) => {
        setPokeApi(res)
      });
  };
  useEffect(() => {
    try {
      getFetch();
    } catch (error) {
      console.log("Error: " + error);
    }
  }, []);

  console.log(pokeApi)



  return (
<div>
   <Routes>
    <Route path="/pokemon/:id" element={<DetailPokemon allData={pokeApi} />} />
    <Route path="/pokemon" element={<AllPokemon allData={pokeApi} />} />   
   </Routes>
</div>
  );
}

export default App;