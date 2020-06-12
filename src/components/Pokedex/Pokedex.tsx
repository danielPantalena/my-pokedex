import React from 'react';

import * as pokeApi from '../../services/ApiFunctions';
import Pokemon from '../Pokemon/Pokemon';

interface Props {}

interface PokesObjs {
  name: string;
  url: string;
}

const Pokedex = (props: Props) => {
  const [pokemonsURLArray, setPokemonsURLArray] = React.useState<PokesObjs[]>([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    pokeApi.getPokesURL().then((pokemonsURL) => {
      setPokemonsURLArray(pokemonsURL);
      setIsLoaded(true);
    });
  }, []);

  if (isLoaded) {
    return (
      <React.Fragment>
        {pokemonsURLArray.map((poke) => (
          <Pokemon name={poke.name} />
        ))}
      </React.Fragment>
    );
  }
  return <div>Carregando...</div>;
};

export default Pokedex;
