import React from 'react';
import { Typography, Slider } from '@material-ui/core/';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import * as pokeApi from '../../services/ApiFunctions';
import Pokemon from '../../components/Pokemon/Pokemon';
import './Pokedex.css';
import { PokemonAPI } from '../../PokemonInterfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
  }),
);

const PokemonSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


const Pokedex = () => {
  const [pokemonsURLArray, setPokemonsURLArray] = React.useState<PokemonAPI[]>([]);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [pokemonsRange, setPokemonsRange] = React.useState<number[]>([0, 151]);

  React.useEffect(() => {
    pokeApi.getPokesURL(151, 0).then((pokemonsURL) => {
      setPokemonsURLArray(pokemonsURL);
      setIsLoaded(true);
    });
  }, []);

  const sliderClass = useStyles();

  if (isLoaded) {
    return (
      <React.Fragment>
        <div className="slider" style={{ width: '40vw', margin: '0 auto', color: 'white' }}>
          <Typography id="range-slider" gutterBottom>
            Pokemons Range
          </Typography>
          <PokemonSlider valueLabelDisplay="auto" defaultValue={pokemonsRange} max={1000}/>
        </div>
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
