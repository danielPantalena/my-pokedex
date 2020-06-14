import React from 'react';

import * as pokeApi from '../../services/ApiFunctions';
import Pokemon from '../Pokemon/Pokemon';

interface PokemonAPI {
  name: string;
  url: string;
}

const Pokedex = () => {
  const [pokemonsURLArray, setPokemonsURLArray] = React.useState<PokemonAPI[]>([]);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    pokeApi.getPokesURL().then((pokemonsURL) => {
      setPokemonsURLArray(pokemonsURL);
      setIsLoaded(true);
    });
  }, []);

  if (isLoaded) {
    return (
      <React.Fragment>
        {pokemonsURLArray.map((poke: PokemonAPI) => (
          <Pokemon key={poke.name} pokeProps={poke} />
        ))}
      </React.Fragment>
    );
  }
  return <div>Carregando...</div>;
};

export default Pokedex;
