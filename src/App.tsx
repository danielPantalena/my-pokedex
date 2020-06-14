import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';
import PokemonDetail from './Pages/PokemonDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route path="/:name" component={PokemonDetail}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
