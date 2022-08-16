import styled from "styled-components";
import { buttonFlexCenter, divFlexCenter } from "../../styles/DefinitionsStyle";

export const Container = styled(divFlexCenter)`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  flex-direction: column;
`;

export const Form = styled.form`
  background-color: var(--color-white);
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);

  padding: 2rem;
  max-width: 360px;
  width: 100%;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;

    span {
      color: var(--color-main);
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
  }
`;

export const BoxInput = styled(divFlexCenter)`
  width: 100%;
  height: 40px;
  margin-bottom: 1.25rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  position: relative;

  span {
    background-color: var(--color-main);
    border-radius: 5px 0 0 5px;
    height: 100%;
    padding: 0 0.65rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-white);
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 2.5rem 0 0.5rem;

    border: none;
    border-radius: 0 5px 5px 0;

    color: var(--color-title);
    
    ::placeholder {
      color: var(--color-grey);
    }
  }

  button {
    background-color: transparent;
    color: var(--color-text);
        
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    right: 0.7rem;
    transform: translateY(-50%);
  }
`;

export const ButtonEnter = styled(buttonFlexCenter)`
  width: 100%;
  height: 40px;
  margin: 2.5rem 0 0.65rem 0;

  background-color: var(--color-main);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  color: var(--color-white);
  font-size: 0.85rem;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;

export const LinkSignup = styled.p`
  color: var(--color-text);
  font-size: 0.8rem;

  a {
    color: var(--color-main);
  }
`;