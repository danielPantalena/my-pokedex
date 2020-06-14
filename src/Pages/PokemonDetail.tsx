import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
  // const [pokemon, setPokemon] = React.useState<PokemonObj>();
  const [pokemonURL, setPokemonURL] = React.useState<PokemonAPI>(Object);

  React.useEffect(() => {
    let poke = null;
    pokeApi.getPokesURL().then((pokemonsURL: PokemonAPI[]) => {
      poke = pokemonsURL.forEach((poke: PokemonAPI) => {
        return poke.name === match.params.name && poke;
      });
    });
  }, [match]);

  React.useEffect(() => {
    pokeApi.getPokeDataFromURL(pokemonURL.url).then((response: PokemonObj) => console.log(response));
  });

  return <div className="container">Hello world</div>;
};

export default PokemonDetail;
