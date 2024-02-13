import { useEffect, useState } from "react";
import getPokemonArray from "./assets/dataCollector";

export default function PokemonCards({
  setEndGame,
  setWinScreen,
  score,
  setScore,
  highScore,
  setHighScore,
  gamemode,
}) {
  const [pokemonState, setPokemonState] = useState([]);
  const numberOfCards = gamemode === 0 ? 5 : gamemode === 1 ? 12 : 20;

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const pokemonArray = await getPokemonArray(numberOfCards);

      if (!ignore) setPokemonState(pokemonArray);
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  function shufflePokemonArray(index) {
    let copiedState = [...pokemonState];
    checkForEnd(copiedState, index);
    shuffleArray(copiedState);
    setPokemonState(copiedState);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //if this check passes, the game ends and this component unmounts
  function checkForEnd(copiedState, index) {
    if (copiedState[index].clicked === true) {
      if (score > highScore) setHighScore(score);
      setEndGame(true);
    } else {
      copiedState[index].clicked = true;
      setScore((score) => score + 1);

      if (score + 1 === numberOfCards) {
        if (score + 1 > highScore) setHighScore(score + 1);
        setWinScreen(true);
      }
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
