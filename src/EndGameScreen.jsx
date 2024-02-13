export default function EndGameScreen({
  gamemode,
  score,
  highScore,
  setEndGame,
  setMainMenu,
}) {
  return (
    <div className="endScreen">
      <p>Game over!</p>
      <p>Gamemode: {gamemode}</p>
      <p>Score: {score}</p>
      <p>High score: {highScore}</p>
      <button
        onClick={() => {
          setEndGame(false);
          setMainMenu(true);
        }}
      >
        Go back to main menu
      </button>
    </div>
  );
}