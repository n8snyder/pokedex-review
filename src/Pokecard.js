import React from "react";
import "./Pokecard.css";

function Pokecard({ pokeName, pokeImg, pokeType, pokeExp }) {


  return (
    <div className="Pokecard">
      <div className="Pokecard-content">
        <h3 className="Pokecard-name">
          {pokeName}
        </h3>
        <img src={pokeImg} alt={`${pokeName} sprite`}></img>
        <h4 className="Pokecard-type">
          Type: {pokeType}
        </h4>
        <h4 className="Pokecard-exp">
          EXP: {pokeExp}
        </h4>
      </div>
    </div>
  )
}


export default Pokecard;