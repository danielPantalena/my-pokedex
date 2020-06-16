export const getPokesURL = async (limit: number, offset: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const responseJSON = await response.json();
  return responseJSON.results;
};

export const getPokeDataFromURL = async (pokeURL: string) => {
  const response = await fetch(pokeURL);
  const responseJSON = await response.json();
  return responseJSON;
};

export const getPokeDataFromName = async (pokeName: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const responseJSON = await response.json();
  return responseJSON;
};
