import React from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './detailPokemon.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
} from 'mdb-react-ui-kit';

function DetailPokemon({ allData }) {
  const pokemonId = useParams();
  console.log(pokemonId);
  return (
    <div className="bg-detail">
      <div className="detali-box">
        <div className="name-box">
          {allData
            .filter((item) => item.id == pokemonId.id)
            .map((item) => (
              <div className="ul-box-1">
                {Object.keys(item.name).map((name, index) => (
                  <>
                    <div className="li-text" key={index}>
                      {name}:{item.name[name]}
                    </div>
                  </>
                ))}
              </div>
            ))}
        </div>
        <div>
          {allData
            .filter((item) => item.id == pokemonId.id)
            .map((item) => (
              <div className="ul-box-2">
                {Object.keys(item.base).map((base, index) => (
                  <>
                    <div className="li-text" key={index}>
                      {base}:{item.base[base]}
                    </div>
                  </>
                ))}
              </div>
            ))}
        </div>
        <div>
          {allData
            .filter((item) => item.id == pokemonId.id)
            .map((item) => (
              <div className="ul-box-3">
                {Object.keys(item.type).map((type) => (
                  <>
                    <div className="li-text">type : {item.type[type]}</div>
                  </>
                ))}
              </div>
            ))}
          <Link to="/pokemon">
            <Button variant="btn btn-danger" size="xs">back</Button>
          </Link>
          <Link to={`/pokemon/${pokemonId.id}/fight`}>
            <Button>Choose</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPokemon;
