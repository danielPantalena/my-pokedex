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

interface Stat {
  name: string;
}

interface Stats {
  base_stat: number;
  stat: Stat;
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
  abilities: string;
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}