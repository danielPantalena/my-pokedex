import React from 'react';
import { Link } from 'react-router-dom';
import * as pokeApi from '../../services/ApiFunctions';
import { RouteProps, PokemonObj, PokemonAPI, Types } from '../../PokemonInterfaces';
import './PokemonDetail.css';

const TYPE_COLORS = {
  bug: 'b1c12e',
  dark: '4f3a2d',
  dragon: '755edf',
  electric: 'fcbc17',
  fairy: 'f4b1f4',
  fighting: '823851d',
  fire: 'e73b0c',
  flying: 'a3b3f7',
  ghost: '6060b2',
  grass: '74c236',
  ground: 'd3b257',
  ice: 'a3e7fd',
  normal: 'c8c4bc',
  psychic: 'FF1493',
  poison: '934594',
  rock: 'b9a156',
  steel: 'b5b5c3',
  water: '3295f6',
};

const PokemonDetail = ({ match }: RouteProps) => {
  const [loading, setLoading] = React.useState(true);
  const [pokemon, setPokemon] = React.useState<PokemonObj>(Object);
  const [pokemonURL, setPokemonURL] = React.useState<string>('URLnotFound');

  React.useEffect(() => {
    pokeApi.getPokesURL(151, 0).then((pokemonsURL: PokemonAPI[]) => {
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

  
  // You must validate the input to get values from TYPE_COLOR object with a unknow type.
  const isValidTypeName = (type: string): type is keyof typeof TYPE_COLORS => {
    return type in TYPE_COLORS;
  };

  const getTypeColor = (type: string) => {
    if (!isValidTypeName(type)) throw Error(`${type} was NOT found as keyof TYPE_COLORS`);
    return `#${TYPE_COLORS[type]}`; // I could use "TYPE_COLORS[type]" because of the validation.
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <React.Fragment>
      <div className="content" style={{ height: '100vh' }}>
        <Link to="/" className="text-white back-link">
          <div className="link-to-back">
            <i className="fas fa-arrow-left"></i>
            <span className="link-to-back-text">Voltar</span>
          </div>
        </Link>
        <div className="col mt-3 pt-3">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-5">
                  <h3 className="pokemon-name">
                    #{`${pokemon.id}`} {pokemon.name}
                  </h3>
                </div>
                <div className="col-7">
                  <div className="float-right">
                    {pokemon.types.map(({ type }: Types) => {
                      return (
                        <span
                          key={type.name}
                          className="badge badge-primary badge-pill mr-1 type-name"
                          style={{ backgroundColor: `${getTypeColor(type.name)}` }}
                        >
                          {type.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img src={pokemon.sprites.front_default} alt="a poke" />
                  <img src={pokemon.sprites.back_default} alt="a poke" />
                </div>
                <div className="col-md-9">
                  <h4 className="mx-auto pokemon-name">{pokemon.name}</h4>

                  {pokemon.stats.map(({ stat, base_stat }) => {
                    return (
                      <div key={stat.name} className="row align-items-center">
                        <div className="col-12 col-md-3">{stat.name.toUpperCase()}</div>
                        <div className="col-12 col-md-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              style={{
                                width: `${base_stat}%`,
                              }}
                            >
                              <small>{base_stat}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PokemonDetail;
