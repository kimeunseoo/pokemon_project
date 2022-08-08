import React from "react";
import { Link } from "react-router-dom"
import './allpokemon.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
} from 'mdb-react-ui-kit';




function AllPokemon({ allData }) {
  return (
    <div className="bg-container">
      <div className="logo-box"></div>
      <div className="title-box-allpokemon"> 
      <h5 className="title-allpokemon"> SELECT YOUR POKEMON </h5>
      </div>
    <Container className="p-5 mb-4">
      <div className="container_card">
        {allData.map((item) => (
            <MDBCard alignment='center' className="custom-class">
              <MDBCardBody>
          <MDBCardText>{item.name.english}</MDBCardText>
          <Link to={`/pokemon/${item.id}`}><Button variant="outline-primary" size="xs">Details</Button></Link>
          </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </Container>
    </div>
 
  );
}

export default AllPokemon;
