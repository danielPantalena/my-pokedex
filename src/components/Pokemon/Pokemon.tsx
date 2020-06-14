import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as apiFunctions from '../../services/ApiFunctions';
import './Pokemon.css';
import { PokemonObj, PokemonProps } from "../../PokemonInterfaces";


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
        <p className="pokemon-id">{`#${pokemon.id}`}</p>
        <img src={pokemon.sprites.front_default} alt="pokemon" />
        <h3 className="pokemon-name">{pokemon.name}</h3>
      </Link>
    </React.Fragment>
  );
};

export default Pokemon;
