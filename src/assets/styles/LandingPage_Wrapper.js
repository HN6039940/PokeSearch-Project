import styled from "styled-components";

export const LandingPageWrapper = styled.section`
  height: 50vh;
  display: grid;
  grid-template-areas:
    "description"
    "button";
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  div {
    grid-area: description;
  }
  h1 {
    font-size: var(--h1-font-size);
  }
  h3 {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mg-size-lg);
    text-align: center;
  }
  p {
    font-size: var(--h4-font-size);
    text-align: center;
  }

  .Link-container {
    grid-area: button;
    transition: var(--transition);
  }

  @media screen and (max-width: 415px) {
    h1 {
      font-size: var(--h3-font-size);
      text-align: center;
      margin-bottom: var(--mg-size-md);
    }
    h3 {
      font-size: var(--h4-font-size);
    }
    p {
      font-size: var(--h5-font-size);
    }
    .Link-container {
      align-self: flex-start;
    }
  }
  @media screen and (min-width: 416px) and (max-width: 736px) {
    h1 {
      font-size: var(--h3-font-size);
      text-align: center;
      margin-bottom: var(--mg-size-md);
    }
    h3 {
      font-size: var(--h4-font-size);
    }
    p {
      font-size: var(--h4-font-size);
    }
    .Link-container {
      align-self: flex-start;
    }
  }
`;
