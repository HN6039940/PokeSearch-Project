import styled from "styled-components";
import { PokemonMenuWrapper } from "./PokemonMenu_Wrapper.js";

export const SearchPageWrapper = styled.section`
  .search-title {
    font-size: var(--h3-font-size);
    text-align: center;
    margin-bottom: var(--mg-size-md);
  }

  .not-found {
    width: 100%;
    color: var(--primary-gray);
    font-weight: 700;
    font-size: var(--h3-font-size);
    text-align: center;
  }
  .grid-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-container {
    display: grid;
    min-width: 60%;
    max-width: 70%;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(200px, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: var(--mg-size-lg);
  }

  @media screen and (max-width: 450px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
      ${PokemonMenuWrapper} {
        width: 100%;
      }
    }
    .not-found {
      color: var(--primary-gray);
      font-weight: 700;
      font-size: var(--h4-font-size);
      text-align: center;
    }
  }

  @media screen and (min-width: 451px) and (max-width: 912px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      ${PokemonMenuWrapper} {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 913px) and (max-width: 1024px) {
    ${PokemonMenuWrapper} {
      width: 100%;
    }
  }
`;
