import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pokedex from './Pages/Pokedex/Pokedex';
import PokemonDetail from './Pages/PokemonDetail'

const Routes = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route path="/:name" component={PokemonDetail} />
        </Switch>
      </BrowserRouter>
  );
};

export default Routes;
