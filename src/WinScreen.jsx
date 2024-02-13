export default function WinScreen({
  setWinScreen,
  setMainMenu,
  score,
  highScore,
}) {
  return (
    <div className="win-screen">
      <p>You won!</p>
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
