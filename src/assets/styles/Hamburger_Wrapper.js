import styled from "styled-components";

export const HamburgerWrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  z-index: 12;

  &:hover {
    cursor: pointer;
  }
  .hamburger {
    width: 80%;
    height: 0.25rem;
    border-radius: 4px;
    background-color: var(--primary-light);
    transition: var(--transition);
  }

  &.open-overLay {
    .hamburger:nth-child(1) {
      transform: translateY(0.8rem) rotate(45deg);
    }
    .hamburger:nth-child(2) {
      opacity: 0;
    }
    .hamburger:nth-child(3) {
      transform: translateY(-0.5rem) rotate(-45deg);
    }
  }
  @media screen and (max-width: 450px) {
    display: flex;
  }
  @media screen and (min-width: 451px) and (max-width: 912px) {
    display: flex;
  }
`;
