import React from 'react';
import { PokemonObj } from '../PokemonInterfaces';

interface CardBodyProps {
  pokemon: PokemonObj;
}

const CardBody = ({ pokemon }: CardBodyProps) => {
  return (
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
                      <span className="base-stat">{base_stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardBody;
