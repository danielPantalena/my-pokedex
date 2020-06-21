import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Pokedex from './Pages/Pokedex/Pokedex';
import PokemonDetail from './Pages/PokemonDetail/PokemonDetail';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route path="/:name" component={PokemonDetail} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
