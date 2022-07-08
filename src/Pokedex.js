import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


function Pokedex({ pokeList }) {

  return (
    <div className="Pokedex">
      {
        pokeList.map(pokemon =>
          <Pokecard
            pokeName={pokemon.name}
            pokeImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            pokeType={pokemon.type}
            pokeExp={pokemon.base_experience}
          />
        )
      }
    </div>
  )
}


export default Pokedex;