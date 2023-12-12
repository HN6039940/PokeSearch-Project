import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 1017,
  filterResultsPokemon: [],
  AllPokemon: [],
};

export const searchPokemonSlice = createSlice({
  name: "searchPokemon",
  initialState,
  reducers: {
    fetchAllPokemon: (state, action) => {
      const { payload } = action;
      state.AllPokemon = payload;
    },
    filterPokemon: (state, action = null) => {
      const { AllPokemon } = state;
      const { payload } = action;
      const filterResults = AllPokemon.filter(
        (item) => item.enName.includes(payload) || item.jpName.includes(payload)
      );
      state.filterResultsPokemon = filterResults;
    },
  },
});

export const { fetchAllPokemon, filterPokemon } = searchPokemonSlice.actions;
export default searchPokemonSlice.reducer;
