import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Importing components
import PokemonMenu from "../../components/PokemonMenu";
import Loading from "../../components/Loading";
// Importing actions
import {
  nextPage,
  prevPage,
  changePokemonsArray,
} from "../../redux/slice/pokemonsListSlice";
// Importing API call function
import { getPokemonMenuData } from "../../axios/createAxios";
// Importing icons
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";
// Importing styles
import { PokemonListWrapper } from "../../assets/styles/PokemonList_Wrapper";

const PokemonsList = () => {
  const { currentPageUrl } = useSelector((state) => state.pokemonsList);
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["pokemons", currentPageUrl],
    queryFn: async () => {
      const {
        data: { count, next, previous, results },
      } = await axios.get(currentPageUrl);
      const pokemonsMenuData = await Promise.all(
        await getPokemonMenuData(results)
      );
      // queryFnから取得する次データのqueryParameterであるlimitの整合性を保つために、limit=30に変換している。
      const formatNext = next ? next.slice(0, -2) + "30" : null;
      const formatPrevious = previous ? previous.slice(0, -2) + "30" : null;

      dispatch(
        changePokemonsArray({
          count,
          formatNext,
          formatPrevious,
          pokemonsMenuData,
        })
      );

      return {
        count,
        formatNext,
        formatPrevious,
        pokemonsMenuData,
        current: currentPageUrl,
      };
    },
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  const { formatNext, formatPrevious, pokemonsMenuData, current } = data;

  return (
    <PokemonListWrapper>
      <div className="pokemon-list-container">
        {pokemonsMenuData.map((item) => {
          return <PokemonMenu key={item.id} {...item} />;
        })}
      </div>

      <div className="btn-container">
        <button
          disabled={!formatPrevious ? true : false}
          onClick={() =>
            dispatch(prevPage({ formatNext, formatPrevious, current }))
          }
        >
          <MdOutlineArrowBack />
        </button>
        <button
          disabled={!formatNext ? true : false}
          onClick={() =>
            dispatch(nextPage({ formatNext, formatPrevious, current }))
          }
        >
          <MdOutlineArrowForward />
        </button>
      </div>
    </PokemonListWrapper>
  );
};

export default PokemonsList;
