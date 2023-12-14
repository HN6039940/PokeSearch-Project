import styled from "styled-components";

export const ErrorPageWrapper = styled.section`
  max-width: var(--max-width);
  width: 100%;
  margin: var(--mg-size-xxl) auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 600px;
    height: 600px;
    margin-bottom: var(--mg-size-md);
  }
  h2 {
    position: relative;
    font-size: var(--h1-font-size);
    margin-bottom: var(--mg-size-xl);
    color: var(--primary-cyan);
    -webkit-text-stroke: 1px var(--primary-dark);
    overflow: hidden;
    animation: LoopScale 1s ease-in-out infinite;
  }
  @keyframes LoopScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 450px) {
    h2 {
      font-size: var(--h3-font-size);
    }
    img {
      width: 250px;
      height: 250px;
      margin-bottom: var(--mg-size-xxl);
    }
  }
  @media screen and (min-width: 451px) and (max-width: 768px) {
    h2 {
      font-size: var(--h2-font-size);
    }
    img {
      width: 350px;
      height: 350px;
      margin-bottom: var(--mg-size-xl);
    }
  }
`;
