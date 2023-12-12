export const pokemonTypes = [
  {
    enName: "normal",
    jpName: "ノーマル",
  },
  {
    enName: "fighting",
    jpName: "かくとう",
  },
  {
    enName: "flying",
    jpName: "ひこう",
  },
  {
    enName: "poison",
    jpName: "どく",
  },
  {
    enName: "ground",
    jpName: "じめん",
  },
  {
    enName: "rock",
    jpName: "いわ",
  },
  {
    enName: "bug",
    jpName: "むし",
  },
  {
    enName: "ghost",
    jpName: "ゴースト",
  },
  {
    enName: "steel",
    jpName: "はがね",
  },
  {
    enName: "fire",
    jpName: "ほのお",
  },
  {
    enName: "water",
    jpName: "みず",
  },
  {
    enName: "grass",
    jpName: "くさ",
  },
  {
    enName: "electric",
    jpName: "でんき",
  },
  {
    enName: "psychic",
    jpName: "エスパー",
  },
  {
    enName: "ice",
    jpName: "こおり",
  },
  {
    enName: "dragon",
    jpName: "ドラゴン",
  },
  {
    enName: "dark",
    jpName: "あく",
  },
  {
    enName: "fairy",
    jpName: "フェアリー",
  },
];

export const searchJpNameType = (target) => {
  const firstType = target?.[1];
  const secondType = target?.[2];
  const searchTypeArray = pokemonTypes.filter(
    (item) => item.enName === firstType || item.enName === secondType
  );
  return searchTypeArray;
};
