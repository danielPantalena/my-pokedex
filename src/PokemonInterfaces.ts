import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  name: string;
}

interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Type {
  name: string;
  url: string;
}

interface Types {
  slot: number;
  type: Type;
}

export interface PokemonAPI {
  name: string;
  url: string;
}

export interface RouteProps extends RouteComponentProps<MatchParams> {}

export interface PokemonProps {
  pokeProps: { name: string; url: string };
}

export interface PokemonObj {
  name: string;
  abilities: string;
  height: number;
  weight: number;
  id: number;
  sprites: Sprites;
  types: Types[];
}