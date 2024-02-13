import { pokemonArray } from "./assets/dataCollector";

export default function PokemonCards() {
  return (
    <div className="card-box">
      {pokemonArray.map((element, index) => (
        <div key={index} className="card">
          <img src={element.logo} alt={element.name} />
          <p>{element.name}</p>
        </div>
      ))}
    </div>
  );
}
