export default function MainMenu({ setGamemode, setScore, setMainMenu }) {
  return (
    <div className="main-menu">
      <button
        onClick={() => {
          setGamemode(0);
          setScore(0);
          setMainMenu(false);
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          setGamemode(1);
          setScore(0);
          setMainMenu(false);
        }}
      >
        Medium
      </button>
      <button
        onClick={() => {
          setGamemode(2);
          setScore(0);
          setMainMenu(false);
        }}
      >
        Hard
      </button>
    </div>
  );
}
