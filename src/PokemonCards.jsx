import { useState } from "react";
import { useEffect } from "react";
import { pokemonArray } from "./assets/dataCollector";

export default function PokemonCards() {
  const [pokemonState, setPokemonState] = useState(pokemonArray);

  function shufflePokemonArray(index) {
    let copiedState = [...pokemonState];
    copiedState[index].clicked = true;
    shuffleArray(copiedState);
    setPokemonState(copiedState);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div className="card-box">
      {pokemonState.map((element, index) => (
        <div
          onClick={() => shufflePokemonArray(index)}
          key={index}
          className="card"
        >
          <img src={element.logo} alt={element.name} />
          <p>{element.name}</p>
        </div>
      ))}
    </div>
  );
}
