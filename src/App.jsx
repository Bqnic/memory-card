import PokemonCards from "./PokemonCards";
import EndGameScreen from "./EndGameScreen";
import MainMenu from "./MainMenu";
import { useState } from "react";

function App() {
  const [mainMenu, setMainMenu] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const [score, setScore] = useState(0);
  const [easyHighScore, setEasyHighScore] = useState(0);
  const [mediumHighScore, setMediumHighScore] = useState(0);
  const [hardHighScore, setHardHighScore] = useState(0);
  const [gamemode, setGamemode] = useState(0); // 0 for easy, 1 for medium, 2 for hard

  if (mainMenu === true) {
    return (
      <>
        <MainMenu
          setGamemode={setGamemode}
          setScore={setScore}
          setMainMenu={setMainMenu}
        ></MainMenu>
      </>
    );
  }

  if (endGame === true) {
    return (
      <>
        <EndGameScreen
          gamemode={gamemode}
          score={score}
          highScore={
            gamemode === 0
              ? easyHighScore
              : gamemode === 1
              ? mediumHighScore
              : hardHighScore
          }
          setEndGame={setEndGame}
          setMainMenu={setMainMenu}
        ></EndGameScreen>
      </>
    );
  }

  return (
    <>
      <PokemonCards
        setEndGame={setEndGame}
        score={score}
        setScore={setScore}
        highScore={
          gamemode === 0
            ? easyHighScore
            : gamemode === 1
            ? mediumHighScore
            : hardHighScore
        }
        setHighScore={
          gamemode === 0
            ? setEasyHighScore
            : gamemode === 1
            ? setMediumHighScore
            : setHardHighScore
        }
        gamemode={gamemode}
      ></PokemonCards>
    </>
  );
}

export default App;
