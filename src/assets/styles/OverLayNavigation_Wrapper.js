import styled from "styled-components";

export const OverLayWrapper = styled.div`
  display: none;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  position: -webkit-fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100dvh - 4.7rem);
  background-color: rgba(244, 240, 226, 0.9);
  z-index: 10;
  /* transform: translateY(-110vh); */
  transform: translateY(5rem);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &.open-overLay {
    display: block;
    transform: translateY(5rem);
    opacity: 1;
    visibility: visible;
  }

  .overlay-nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    a {
      position: relative;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-dark);
      text-decoration: none;
      transition: var(--transition);
      &:hover {
        color: var(--primary-cyan);
      }
      &:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        border-radius: 4px;
        background-color: var(--primary-gray);
        transition: var(--transition);
        transform: scaleX(0);
        transform-origin: center;
      }
      &:hover:after {
        animation: hoverScale 0.2s ease-in forwards;
      }
    }
    @keyframes hoverScale {
      0% {
        transform: scaleX(0);
      }
      50% {
        transform: scaleX(0.5);
      }
      100% {
        transform: scaleX(0.9);
      }
    }
  }
`;
