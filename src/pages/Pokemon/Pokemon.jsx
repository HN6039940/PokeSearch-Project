import { useLoaderData, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// store
import { getPokemonData } from "../../axios/createAxios";
import { searchJpNameType } from "../../data/pokemonTypes.js";
// components
import Loading from "../../components/Loading";
import BackButton from "../../components/btn/BackButton.jsx";
// styles
import { PokemonWrapper } from "../../assets/styles/Pokemon_Wrapper.js";

// URLのパラメータを取得するために、loaderを使用
export const loader = ({ params, request }) => {
  const nameParam = new URL(request.url).searchParams.get("enName");
  const { id } = params;
  return { id, nameParam };
};

const Pokemon = () => {
  // 直接URLでIDのみ入力された場合とsearchページから遷移した場合で、
  // idとenNameを取得するために、useLoaderDataを使用
  const { id, nameParam } = useLoaderData();

  const { state } = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      try {
        const [pokemonData, pokemonSpeciesData] = await getPokemonData(
          id || nameParam
        );
        return { ...pokemonData, ...pokemonSpeciesData };
      } catch (error) {
        return error;
      }
    },
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 3,
  });

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const { flavor_text_entries, height, sprites, types, weight, names } = data;
  const { front_default, other } = sprites;

  // dataから取得するのは英語のタイプ名なので、以下の式はそれらを日本語のタイプ名に変換している。
  // それぞれ type flavor_text name を日本語に変換している。

  const pokemonEnTypes = types.reduce((acc, item) => {
    return { ...acc, [item.slot]: item.type.name };
  }, {});
  const convertedJpTypes = searchJpNameType(pokemonEnTypes);

  const flavorText = flavor_text_entries
    .filter(
      (item) => item.language.name === "ja-Hrkt" || item.language.name === "en"
    )
    .reduce((acc, item) => {
      if (!acc["ja-Hrkt"] && item.language.name === "ja-Hrkt") {
        return { ...acc, ["ja-Hrkt"]: item.flavor_text };
      }
      if (!acc["en"] && item.language.name === "en") {
        return { ...acc, ["en"]: item.flavor_text };
      }
      return acc;
    }, {});

  const [pokemonJpName, pokemonEnName] = names
    .filter(
      (item) => item.language.name === "ja-Hrkt" || item.language.name === "en"
    )
    .map((item) => item.name);

  return (
    <>
      <BackButton />
      <PokemonWrapper>
        <div className="column-left">
          <img
            className="pixel-img"
            src={front_default}
            alt={state?.jpName || pokemonJpName}
          />
          <img
            src={other["official-artwork"].front_default}
            alt={state?.jpName || pokemonJpName}
            className="official-artwork"
          />
        </div>
        <div className="column-right">
          <h3>
            <span className="tag">名前</span>
            {state?.jpName || pokemonJpName}
          </h3>
          <h4>
            <span className="tag">Name </span>
            {state?.enName || pokemonEnName}
          </h4>

          <p>
            <span className="tag">タイプ</span>
            {convertedJpTypes.map((item) => {
              return (
                <span className="type-name" key={item.enName}>
                  {item.jpName}{" "}
                </span>
              );
            })}
          </p>

          <p>
            <span className="tag">身長</span>
            {`${height % 10 === 0 ? `${height / 10}.0` : height / 10} m`}
          </p>
          <p>
            <span className="tag">体重</span>
            {`${weight % 10 === 0 ? `${weight / 10}.0` : weight / 10} kg`}
          </p>
          <h4 className="flavor-text">
            {flavorText["ja-Hrkt"] || flavorText["en"]}
          </h4>
        </div>
      </PokemonWrapper>
    </>
  );
};

export default Pokemon;
