import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <div className="allpage">
      <div className="header">
        <div className="header-title">
          <h1 className="title"> Pokédex </h1>
        </div>
      </div>
      <div className="main_home">
        <Link to={"/pokemon"}>
          <button className="button-start">Start to Game</button>
        </Link>
      </div>
      <div className="footer">
        <div className="footer-box">
          <div className="info-box">
            <p className="info_g03"> 03.Gruppenarbeit 02/08/2022 </p>
          </div>
          <div className="footer_copyright-box">
            <p className="footer_copyright">
              {" "}
              Copyright by Achim, Narzar, Neiment, Seo All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
