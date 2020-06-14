import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as apiFunctions from '../../services/ApiFunctions';
import './Pokemon.css';

interface PokemonProps {
  pokeProps: { name: string; url: string };
}

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

const Pokemon = (props: PokemonProps) => {
  const [pokemon, setPokemon] = useState<PokemonObj>(Object);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const { url } = props.pokeProps;
    apiFunctions.getPokeDataFromURL(url).then((resp: PokemonObj) => {
      setPokemon(resp);
      setLoading(false);
    });
  }, [props]);

  if (loading) return <div>Carregando...</div>;

  return (
    <React.Fragment>
      <Link to={`/${pokemon.name}`} className="pokemon">
        <p className="pokemon-id">{pokemon.id}</p>
        <img src={pokemon.sprites.front_default} alt="pokemon" />
        <h3 className="pokemon-name">{pokemon.name}</h3>
      </Link>
    </React.Fragment>
  );
};

export default Pokemon;
