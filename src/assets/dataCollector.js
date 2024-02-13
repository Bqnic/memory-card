//for easy mode: limit = 5
//for medium mode: limit = 12
//for hard mode: limit = 20
//generate random offset and generate random int that picks pokemon

//make an array of objects, object should have the name of the pokemon and it's picture
//return the array

const limit = 5;

async function getData(offset) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=60`
  );

  const data = await response.json();
  return data.results;
}

async function pickPokemon(dataArray, skip) {
  let pokemonArray = [];
  for (let i = 0; i < limit * skip; i += skip) {
    const picture = await getPokemonPicture(dataArray[i].url);
    pokemonArray.push({
      name: dataArray[i].name,
      logo: picture.sprites.front_default,
      clicked: false,
    });
  }

  return pokemonArray;
}

async function getPokemonPicture(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

let offset = randomNumber(600);
const data = await getData(offset);

export const pokemonArray = await pickPokemon(data, 3);

console.log(pokemonArray);
