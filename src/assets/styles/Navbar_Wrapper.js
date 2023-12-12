import styled from "styled-components";
export const NavbarWrapper = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-gray);
  width: 100%;
  height: 5rem;
  padding: 0 var(--pd-size-xl);
  border-bottom: 3px solid var(--primary-cyan);
  margin-bottom: 4rem;
  h3 {
    font-size: var(--h3-font-size);
    color: var(--primary-light);
    font-weight: 700;
    transition: var(--transition);
    span {
      color: var(--primary-cyan);
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    gap: 2rem;
  }

  @media screen and (max-width: 450px) {
    padding: 0 var(--pd-size-md);
    margin-bottom: 2rem;
    h3 {
      font-size: calc(var(--h3-font-size) - 0.5rem);
    }
    nav {
      display: none;
    }
  }
  @media screen and (min-width: 451px) and (max-width: 912px) {
    padding: 0 var(--pd-size-lg);
    h3 {
      font-size: calc(var(--h3-font-size) - 0.5rem);
    }
    nav {
      display: none;
    }
  }
`;
