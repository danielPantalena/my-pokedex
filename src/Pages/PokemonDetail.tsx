import React from 'react';
import { Link } from 'react-router-dom';
import * as pokeApi from '../services/ApiFunctions';
import { RouteProps, PokemonObj, PokemonAPI } from '../PokemonInterfaces';

const PokemonDetail = ({ match }: RouteProps) => {
  const [loading, setLoading] = React.useState(true);
  const [pokemon, setPokemon] = React.useState<PokemonObj>(Object);
  const [pokemonURL, setPokemonURL] = React.useState<string>('');

  React.useEffect(() => {
    pokeApi.getPokesURL().then((pokemonsURL: PokemonAPI[]) => {
      const url =
        // find POSSIBLY RETURNS 'undefined'. So is necessary to use te 'OPTINIAL CHAINING'(?.) of TS.
        //   when did't find, it will return 'undefined'.

        // 'NULLISH COALESCING'(??) of TS, goes hand-in-hand with Optinial Chaining. When 'undefined' you can
        //   returns another default value.

        // Good example of OPITINAL CHAINING  and NULLISH COALESCING below :)
        pokemonsURL.find(({ name }) => name === match.params.name)?.url ?? 'URLnotFound';
      setPokemonURL(url);
    });
  }, [match]);

  React.useEffect(() => {
    if (pokemonURL === 'URLnotFound') return;
    pokeApi.getPokeDataFromURL(pokemonURL).then((response: PokemonObj) => {
      setPokemon(response);
      setLoading(false);
    });
  }, [pokemonURL]);

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="container">
      <Link to="/">VOLTAR</Link>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.back_default} alt="back" />
      <img src={pokemon.sprites.front_default} alt="back" />
      <img src={pokemon.sprites.front_shiny} alt="back" />
      <img src={pokemon.sprites.back_shiny} alt="back" />
      <p>{pokemon.types.map(({ type }) => type.name).join(', ')}</p>
      <p>{pokemon.weight}</p>
      <p>{pokemon.height}</p>
    </div>
  );
};

export default PokemonDetail;
