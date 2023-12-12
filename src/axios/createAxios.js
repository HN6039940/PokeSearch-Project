import axios from "axios";
const pokemonUrl = import.meta.env.VITE_POKEAPI_URL;
const pokemonSpeciesUrl = import.meta.env.VITE_POKEAPI_SPECIES_URL;

const fetchPokemon = (url) => {
  return axios.get(`${pokemonUrl}${url}/`);
};

export const fetchPokemonSpecies = (params) => {
  return axios.get(`${pokemonSpeciesUrl}${params}/`);
};

export const getPokemonMenuData = async (results) => {
  const promise = await results.map(async (item) => {
    const pokemonSpeciesUrlResults = await axios.get(item.url);
    const pokemonUrlResults = await fetchPokemon(
      pokemonSpeciesUrlResults.data.id
    );

    return {
      url: item.url,
      id: pokemonUrlResults.data.id,
      sprites: pokemonUrlResults.data.sprites.front_default,
      jpName: pokemonSpeciesUrlResults.data.names
        .filter((item) => item.language.name === "ja-Hrkt")
        .map((item) => item.name)[0],
      enName: pokemonSpeciesUrlResults.data.names
        .filter((item) => item.language.name === "en")
        .map((item) => item.name)[0],
    };
  });

  return Promise.all(promise).then((results) => {
    return results;
  });
};

export const getPokemonData = async (id) => {
  try {
    const fetchPokemonResult = fetchPokemon(id);
    const fetchPokemonSpeciesResult = fetchPokemonSpecies(id);

    const promises = await Promise.all([
      fetchPokemonResult,
      fetchPokemonSpeciesResult,
    ]).then((results) => {
      const pokemonDataMap = results.map((item) => item.data);
      return pokemonDataMap;
    });

    return promises;
  } catch (error) {
    return error;
  }
};

export const getLimitPokemonData = async (limit) => {
  try {
    const allPokemonData = await fetchPokemonSpecies(`?limit=${limit}`);

    const allPokemonDataResults = await getPokemonMenuData(
      allPokemonData.data.results
    );
    return allPokemonDataResults;
  } catch (error) {
    return error;
  }
};
