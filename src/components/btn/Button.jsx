import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: var(--pd-size-md) var(--pd-size-xl);
  border-radius: 5px;
  background-color: var(--primary-cyan);
  color: var(--primary-dark);
  font-size: var(--h4-font-size);
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    background-color: var(--primary-dark);
    color: var(--primary-cyan);
  }
`;

const Button = ({ text }) => {
  return <ButtonWrapper>{text}</ButtonWrapper>;
};

export default Button;
