import React from "react";
import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function DetailPokemon({ allData }) {
  const pokemonId = useParams();
  console.log(pokemonId);
  return (
    <>
      {allData
        .filter((item) => item.id == pokemonId.id)
        .map((item) => (
          <ul>
            {Object.keys(item.name).map((name, index) => (
              <>
              <li key={index}>
                {name}:{item.name[name]}
              </li>
              </>
            ))}
          </ul>
        ))}
      {allData
      .filter((item) => item.id == pokemonId.id)
      .map((item)=>(
        <ul>
           {Object.keys(item.base).map((base, index) => (
              <>
              <li key={index}>
                {base}:{item.base[base]}
              </li>
              </>
            ))}
        </ul>
      ))}

      {allData
      .filter((item) => item.id == pokemonId.id)
      .map((item)=>(
        <ul>
           {Object.keys(item.type).map((type) => (
              <>
              <li>
               type : {item.type[type]}
              </li>
              </>
            ))}
        </ul>
      ))}
      <Link to="/pokemon"><Button>back</Button></Link>
      <Link to={`/pokemon/${pokemonId.id}/fight`}><Button>Choose</Button></Link>

    </>

  );
}

export default DetailPokemon;
