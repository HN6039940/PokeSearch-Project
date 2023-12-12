import styled from "styled-components";

export const PokemonListWrapper = styled.section`
  padding-top: var(--pd-size-md);
  text-align: center;
  .pokemon-list-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 200px);
    column-gap: 2rem;
    row-gap: 2rem;
    align-items: center;
    justify-items: center;
    margin-bottom: var(--mg-size-lg);
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    button {
      border: none;
      width: 3rem;
      height: 3rem;
      background-color: transparent;
      :hover {
        cursor: pointer;
      }

      svg {
        width: 100%;
        height: 100%;
        color: var(--primary-color3);
      }
    }
  }
  @media screen and (max-width: 450px) {
    .pokemon-list-container {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(30, 200px);
    }
  }
  @media screen and (min-width: 451px) and (max-width: 912px) {
    .pokemon-list-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(15, 200px);
    }
  }
  @media screen and (min-width: 913px) and (max-width: 1280px) {
    .pokemon-list-container {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(10, 200px);
    }
  }
`;
