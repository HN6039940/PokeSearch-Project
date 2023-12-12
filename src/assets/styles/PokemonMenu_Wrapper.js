import styled from "styled-components";
import { Link } from "react-router-dom";
export const PokemonMenuWrapper = styled.article`
  position: relative;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: inherit;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 105%;
    height: 105%;
    border: 3px solid var(--primary-gray);
    border-radius: 10px;
    transform: translate(-3%, -2%);
    opacity: 0;
    z-index: -1;
  }
  &:hover:after {
    animation: hoverAction 0.2s ease-in alternate forwards;
    cursor: pointer;
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
  @keyframes hoverAction {
    0% {
      opacity: 0;
      width: 105%;
      height: 105%;
      transform: translate(-3%, -2%);
      border: 3px solid var(--primary-dark);
    }
    50% {
      opacity: 0.5;
      width: 103%;
      height: 103%;
    }
    70% {
      opacity: 0.7;
      width: 102%;
      height: 102%;
    }
    100% {
      opacity: 1;
      width: 100%;
      height: 100%;
      transform: translate(0, 0);
      border: 3px solid var(--primary-gray);
    }
  }
`;

export const PokemonLinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--primary-dark);
  h4 {
    color: var(--primary-gray);
  }
`;
