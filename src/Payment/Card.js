import React from "react";
import chip from "../images/chip.png";
import visa from "../images/visa.png";
import map from "../images/map.png";
import "../App.css";

function Card() {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="front">
          <img src={map} alt="map" className="map-img" />
          <div className="row">
            <img src={chip} width="60px" alt="chip" />
            <img src={visa} width="60px" alt="visa" />
          </div>
          <div className="row card-no">
            <p>4324</p>
            <p>5433</p>
            <p>9282</p>
            <p>1030</p>
          </div>
          <div className="row card-holder">
            <p>CARD HOLDER</p>
            <p>VALID TILL</p>
          </div>
          <div className="row name">
            <p>John Doe</p>
            <p>10 / 25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
