import { createSlice } from "@reduxjs/toolkit";
const PokemonSpeciesUrl = import.meta.env.VITE_POKEAPI_HAS_LIMIT_URL;

const initialState = {
  pokemons: [],
  currentPageUrl: PokemonSpeciesUrl,
  nextPageUrl: null,
  prevPageUrl: null,
};

const slice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    initializeUrl: (state) => {
      state.currentPageUrl = PokemonSpeciesUrl;
    },
    nextPage: (state, action) => {
      const { formatNext } = action.payload;
      state.currentPageUrl = formatNext;
    },
    prevPage: (state, action) => {
      const { formatPrevious } = action.payload;
      state.currentPageUrl = formatPrevious;
    },
    changePokemonsArray: (state, action) => {
      const { formatNext, formatPrevious, pokemonsMenuData } = action.payload;

      state.nextPageUrl = formatNext;
      state.prevPageUrl = formatPrevious;
      state.pokemons = pokemonsMenuData;
    },
  },
});

export const { initializeUrl, nextPage, prevPage, changePokemonsArray } =
  slice.actions;
export default slice.reducer;
