import React, { useState } from 'react';
import * as apiFunctions from '../../services/ApiFunctions';

interface PokemonProps {
  pokeProps: { name: string; url: string };
}

interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface PokemonObj {
  name: string;
  abilities: string;
  heigh: number;
  weight: number;
  id: number;
  sprites: Sprites;
}

const Pokemon = (props: PokemonProps) => {
  const [pokemon, setPokemon] = useState<PokemonObj>(Object);
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    const { url } = props.pokeProps;
    apiFunctions.getPokeDataFromURL(url).then((resp: PokemonObj) => {
      setPokemon(resp);
      setLoading(false);
      ;
    });
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <React.Fragment>
      <img src={pokemon.sprites.back_default} alt="pokemon" />
    </React.Fragment>
  );
};

export default Pokemon;
