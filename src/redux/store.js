import { configureStore } from "@reduxjs/toolkit";
import pokemonsListReducer from "./slice/pokemonsListSlice";
import searchPokemonReducer from "./slice/searchPokemonSlice";
import styleElementReducer from "./slice/styleElementSlice";
export const store = configureStore({
  reducer: {
    pokemonsList: pokemonsListReducer,
    searchPokemon: searchPokemonReducer,
    styleElement: styleElementReducer,
  },
});
