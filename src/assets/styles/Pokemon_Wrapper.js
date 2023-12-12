import styled from "styled-components";

export const PokemonWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-areas: "image image info";
  grid-template-columns: 20% 20% 60%;
  grid-template-rows: 1fr 1fr;
  column-gap: 2rem;
  justify-content: center;
  align-items: center;

  .column-left {
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .pixel-img {
      width: 30%;
      height: 30%;
      align-self: flex-end;
    }
    .official-artwork {
      width: 60%;
      height: 60%;
    }
  }

  .column-right {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: var(--pd-size-lg) var(--pd-size-xl);
    border-radius: 5px;
    border: 3px solid var(--primary-dark);
    gap: 1rem;
    .tag {
      display: inline-block;
      padding: var(--pd-size-sm) var(--pd-size-sm);
      font-weight: 700;
      background-color: var(--primary-cyan);
      color: var(--primary-dark);
      border-radius: 5px;
      margin-right: 1rem;
    }
    .type-name {
      font-weight: bold;
      color: var(--primary-color3);
    }
    .flavor-text {
      font-weight: 700;
      font-size: var(--h4-font-size);
    }
  }

  @media screen and (max-width: 450px) {
    grid-template-areas:
      "image"
      "info";
    grid-template-columns: 1fr;
    grid-template-rows: 45% 55%;
    row-gap: 0.5rem;
    .column-right {
      width: 94%;
      margin: 0 auto var(--mg-size-md) auto;
    }
  }
  @media screen and (min-width: 451px) and (max-width: 1025px) {
    grid-template-areas:
      "image"
      "info";
    grid-template-columns: 1fr;
    grid-template-rows: 55% 45%;
    row-gap: 0.5rem;
    .column-left {
      gap: 0.5rem;
      .pixel-img {
        width: 30%;
        height: 30%;
        align-self: center;
      }
      .official-artwork {
        width: 40%;
        height: 40%;
      }
    }
    .column-right {
      width: 94%;
      margin: 0 auto;
      gap: 0.5rem;
      margin: 0 auto var(--mg-size-lg) auto;
    }
  }

  @media screen and (min-width: 1026px) and (max-width: 1770px) {
    grid-template-columns: 20% 20% 50%;
    .column-right {
      gap: 0.5rem;
    }
  }
`;
