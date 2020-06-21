import React from 'react';

import * as pokeApi from '../../services/ApiFunctions';
import Pokemon from '../../components/Pokemon/Pokemon';

import { PokemonAPI } from '../../PokemonInterfaces';
import './Pokedex.css';

const Pokedex = () => {
  const [pokemonsURLArray, setPokemonsURLArray] = React.useState<PokemonAPI[]>([]);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    pokeApi.getPokesURL(151, 0).then((pokemonsURL) => {
      setPokemonsURLArray(pokemonsURL);
      setIsLoaded(true);
    });
  }, []);

  if (isLoaded) {
    return (
      <React.Fragment>
        <div className="pokedex">
          {pokemonsURLArray.map((poke: PokemonAPI) => (
            <Pokemon key={poke.name} name={poke.name} />
          ))}
        </div>
      </React.Fragment>
    );
  }
  return <div>Carregando...</div>;
};

export default Pokedex;
