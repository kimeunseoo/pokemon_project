import React from "react";
import { Link } from "react-router-dom"
import './home.css';

function Home() {
  return (
    <>
    <div className="header">
      <div className="header-title">
        <h1 className="title"> Pokédex </h1>
      </div>
    </div>
    <div className="main_home">
    <Link to={'/pokemon'}><button>Start to Game</button></Link>
    </div>
    <div className="footer">
      <p className="info_g03"> 03.Gruppenarbeit 02/08/2022 </p>
      <p className="footer_copyright"> Copyright 2022. Achim, Narzar, Neiment, Seo All rights reserved</p>
    </div>
    </>
  );
}

export default Home;
