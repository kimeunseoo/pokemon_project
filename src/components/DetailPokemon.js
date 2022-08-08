import React from "react";
import { useParams } from "react-router-dom";

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

    </>

  );
}

export default DetailPokemon;
