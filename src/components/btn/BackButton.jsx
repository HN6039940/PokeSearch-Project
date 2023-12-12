import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: var(--mg-size-xxl);
  button {
    width: 140px;
    color: var(--primary-dark);
    border: 3px solid var(--primary-dark);
    border-radius: 5px;
    background-color: var(--primary-light);
    padding: var(--pd-size-sm) var(--pd-size-md);
    font-weight: 700;
    font-size: var(--h4-font-size);
    transition: var(--transition);
    &:hover {
      cursor: pointer;
      background-color: var(--primary-dark);
      color: var(--primary-light);
    }
  }
  @media screen and (max-width: 450px) {
    margin-bottom: var(--mg-size-sm);
  }
  @media screen and (min-width: 451px) and (max-width: 1024px) {
    margin-bottom: var(--mg-size-md);
  }
`;

const BuckButton = () => {
  return (
    <>
      <ButtonWrapper>
        <button onClick={() => window.history.back()}>戻る</button>
      </ButtonWrapper>
    </>
  );
};

export default BuckButton;
