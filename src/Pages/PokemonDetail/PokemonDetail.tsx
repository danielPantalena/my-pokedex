import React from 'react';
import { Link } from 'react-router-dom';
import * as pokeApi from '../../services/ApiFunctions';
import { RouteProps, PokemonObj, PokemonAPI } from '../../PokemonInterfaces';
import './PokemonDetail.css';

// const TYPE_COLORS = {
//   bug: 'green',
//   dark: 'balck',
//   dragon: 'organge',
//   electric: 'yellow',
//   fairy: 'pink',
//   fighting: 'grey',
//   fire: 'organge',
//   flying: 'grey',
//   ghost: 'purple',
//   grass: 'green',
//   ground: 'yellow',
//   ice: 'light-blue',
//   normal: 'grey',
//   poison: 'purple',
//   rock: 'grey',
//   steel: 'grey',
//   water: 'blue',
// };

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
                  <h3>
                    #{`${pokemon.id}`}{' '}
                    {pokemon.name.split('').map((char, i) => (i === 0 ? char.toUpperCase() : char))}
                  </h3>
                </div>
                <div className="col-7">
                  <div className="float-right">
                    {pokemon.types.map(({ type }) => {
                      return (
                        <span key={type.name} className="badge badge-primary badge-pill mr-1">
                          {type.name
                            .split('')
                            .map((char, i) => (i === 0 ? char.toUpperCase() : char))}
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
                  <h4 className="mx-auto">
                    {pokemon.name.split('').map((char, i) => (i === 0 ? char.toUpperCase() : char))}
                  </h4>

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
