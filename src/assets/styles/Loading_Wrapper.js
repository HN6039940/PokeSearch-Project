import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 50%;
  height: 50vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading {
    position: relative;
    width: clamp(100px, 50%, 100px);
    height: clamp(100px, 20%, 100px);
    .loading-square {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      background-color: var(--primary-gray);
      animation: loading 1.6s infinite ease-in-out;
      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.4s;
      }
      &:nth-child(3) {
        animation-delay: 0.8s;
      }
      &:nth-child(4) {
        animation-delay: 1.2s;
      }

      @keyframes loading {
        0% {
          top: 0;
          left: 0;
          transform: translateX(0);
        }
        25% {
          top: 0;
          left: 50%;
          transform: translateX(25%);
        }
        50% {
          top: 50%;
          left: 50%;
          transform: translate(25%, 25%);
        }
        75% {
          top: 50%;
          left: 0;
          transform: translate(0, 25%);
        }
        100% {
          top: 0;
          left: 0;
          transform: translateX(0);
        }
      }
    }
  }
`;
