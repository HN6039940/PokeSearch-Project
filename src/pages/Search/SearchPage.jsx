import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
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

export const loader = ({ request }) => {
  const url = new URL(request.url).searchParams;
  const query = url.get("q");
  return query;
};

const SearchPage = () => {
  const { filterResultsPokemon, limit } = useSelector(
    (state) => state.searchPokemon
  );
  const dispatch = useDispatch();
  const query = useLoaderData();
  const navigate = useNavigate();

  // queryのcacheにURLのqueryを参照しているためページ遷移時にqueryをリセットが必要
  useEffect(() => {
    navigate(".", { replace: true, search: "?q=" });
  }, [navigate]);

  useQuery({
    queryKey: ["pokemon", limit],
    queryFn: async () => {
      try {
        const result = await getLimitPokemonData(limit);
        dispatch(fetchAllPokemon(result));
        return null;
      } catch (error) {
        return error;
      }
    },
    // cache
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 3,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["filterPokemon", query],
    queryFn: async () => {
      try {
        // 入力した際の頭文字を問わずに検索に引っ掛ける為queryの最初の文字を大文字に変換する必要あり
        const formatQuery = query.slice(0, 1).toUpperCase() + query.slice(1);
        return { query: formatQuery };
      } catch (error) {
        return error;
      }
    },
    // cache
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 3,
  });

  useEffect(() => {
    if (data) {
      dispatch(filterPokemon(data.query));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
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
