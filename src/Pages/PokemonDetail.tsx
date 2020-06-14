import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import * as pokeApi from '../services/ApiFunctions';

interface PokemonAPI {
  name: string;
  url: string;
}

interface MatchParams {
  name: string;
}

interface RouteProps extends RouteComponentProps<MatchParams> {}

interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface PokemonObj {
  name: string;
  abilities: string;
  heigh: number;
  weight: number;
  id: number;
  sprites: Sprites;
}

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
        pokemonsURL.find(({ name }) => name === match.params.name)?.url ?? '';
      setPokemonURL(url);
    });
  }, [match]);

  React.useEffect(() => {
    if (pokemonURL === '') return;
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
      <p>{pokemon.weight}</p>
      <p>{pokemon.heigh}</p>
    </div>
  );
};

export default PokemonDetail;
