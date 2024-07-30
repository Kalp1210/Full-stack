import React from "react";
import "../../components/pokeCardComp/RandomPokemon.css";
const RandomPokemon = () => {
  const PokeNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PokeNum}.png`;
  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{PokeNum}</h1>
      <img src={url} />
    </div>
  );
};

export default RandomPokemon;
