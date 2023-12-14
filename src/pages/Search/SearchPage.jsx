import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

// store
import { getLimitPokemonData } from "../../axios/createAxios";
import {
  fetchAllPokemon,
  filterPokemon,
} from "../../redux/slice/searchPokemonSlice";

// components
import Loading from "../../components/Loading";
import PokemonMenu from "../../components/PokemonMenu";
import SearchBar from "../../components/SearchBar";

// styles
import { SearchPageWrapper } from "../../assets/styles/SearchPage_Wrapper";

const SearchPage = () => {
  const { filterResultsPokemon, limit } = useSelector(
    (state) => state.searchPokemon
  );
  const dispatch = useDispatch();
  const query = useLoaderData();

  const { isError, error, isLoading, isFetching } = useQuery({
    queryKey: ["pokemon", limit],
    queryFn: async () => {
      const result = await getLimitPokemonData(limit);
      dispatch(fetchAllPokemon(result));
      return result;
    },
    // cache
    staleTime: 1000 * 60 * 2000,
    cacheTime: 1000 * 60 * 3000,
  });

  const { data } = useQuery({
    queryKey: ["filterPokemon", query],
    queryFn: async () => {
      // 入力した際の頭文字を問わずに検索に引っ掛ける為queryの最初の文字を大文字に変換する必要あり
      const formatQuery = query.slice(0, 1).toUpperCase() + query.slice(1);
      return { query: formatQuery };
    },
    // cache
    staleTime: 1000 * 60 * 200,
    cacheTime: 1000 * 60 * 300,
  });

  useEffect(() => {
    if (data) {
      dispatch(filterPokemon(data.query));
    }
  }, [data, dispatch]);

  if (isLoading && isFetching) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (isError) {
    throw new Response("Error", {
      status: error?.response.status,
      statusText: error?.message,
    });
  }

  return (
    <SearchPageWrapper>
      <h3 className="search-title">Search</h3>
      <SearchBar />
      {filterResultsPokemon.length === 0 ? (
        <h3 className="not-found">No Search Result</h3>
      ) : null}
      <div className="grid-wrapper">
        <div className="grid-container">
          {filterResultsPokemon.map((item) => {
            return <PokemonMenu key={item.id} {...item} />;
          })}
        </div>
      </div>
    </SearchPageWrapper>
  );
};

export default SearchPage;
