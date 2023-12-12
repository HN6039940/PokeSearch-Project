import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenuWrapper = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 500;
  color: var(--primary-light);
  transition: var(--transition);
  &:hover {
    color: var(--primary-cyan);
  }

  &:hover:before {
    animation: hoverScale 0.25s ease-in forwards;
  }

  &:before {
    position: absolute;
    content: "";
    top: calc(100% - 0.2rem);
    width: 100%;
    height: 0.2rem;
    background-color: var(--primary-light);
    border-radius: 4px;
    transition: var(--transition);
    transform: translateY(100%) scaleX(0);
    transform-origin: center;

    @keyframes hoverScale {
      0% {
        transform: scaleX(0);
      }

      100% {
        transform: scaleX(1);
      }
    }
  }

  &.active {
    color: var(--primary-cyan);
    &:before {
      background-color: var(--primary-light);
      transform: scaleX(1);
    }
    &:hover:before {
      animation: none;
    }
  }
`;
