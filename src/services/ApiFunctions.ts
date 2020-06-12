export const getPokesURL = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  const responseJSON = await response.json();
  return responseJSON.results;
};

export const getPokeDataFromURL = async (pokeURL: string) => {
  const response = await fetch(pokeURL);
  const responseJSON = await response.json();
  console.log(responseJSON);
  return responseJSON;
};
