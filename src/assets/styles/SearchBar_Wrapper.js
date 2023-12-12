import styled from "styled-components";
import { Form } from "react-router-dom";

export const FormWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--mg-size-xxl);

  .search-text {
    position: relative;
    width: 40%;
    border: none;
    border-radius: 3px;
    color: var(--primary-gray);
    font-weight: 700;
    padding: var(--pd-size-md) var(--pd-size-lg);
    box-shadow: var(--box-shadow);
    letter-spacing: var(--letter-spacing);
  }
  .search-btn {
    border: none;
    border-radius: 3px;
    background-color: var(--primary-gray);
    color: var(--primary-light);
    padding: var(--pd-size-md) var(--pd-size-lg);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }

  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-areas:
      "search-text"
      "search-btn";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    row-gap: 0.5rem;
    margin-bottom: var(--mg-size-md);
    .search-text {
      width: 90%;
    }
    .search-btn {
      border: none;
      padding: var(--pd-size-sm) var(--pd-size-md);
      letter-spacing: var(--letter-spacing);
    }
  }
`;
