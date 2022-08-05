import React from "react";
import { Link } from "react-router-dom"


function AllPokemon({ allData }) {
  return (

      <ul>
        {allData.map((item) => (
            <>
          <li>{item.name.english}</li>
          <Link to={`/pokemon/${item.id}`}>details</Link>
          </>
        ))}
      </ul>
    
  );
}

export default AllPokemon;
