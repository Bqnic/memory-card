export default function WinScreen({
  setWinScreen,
  setMainMenu,
  score,
  highScore,
  gamemode,
}) {
  return (
    <div className="win-screen">
      <p>You won!</p>
      <p>
        Gamemode: {gamemode === 0 ? "Easy" : gamemode === 1 ? "Medium" : "Hard"}
      </p>
      <p>Score: {score}</p>
      <p>Highscore: {highScore}</p>
      <button
        onClick={() => {
          setWinScreen(false);
          setMainMenu(true);
        }}
      >
        Go back to main menu
      </button>
    </div>
  );
}
