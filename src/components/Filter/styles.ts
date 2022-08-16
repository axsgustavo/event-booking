import styled from "styled-components";
import { buttonFlexCenter } from "../../styles/DefinitionsStyle";

export const Container = styled.div`
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 1rem;
  padding: 0 1rem;
  position: relative;

  @media screen and (max-width: 500px) {
    padding: 0 0.5rem;
  }
`;

export const BoxInputFilterName = styled.form`
  max-width: 400px;
  width: 100%;

  margin-right: 1rem;
  position: relative;

  button {
    background-color: transparent;
    color: var(--color-text);
    transition: color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
      color: var(--color-main);
    }
  }

  input {
    height: 40px;
    width: 100%;

    border: none;
    border-radius: 50px;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);

    padding: 0 2.8rem 0 1.2rem;
    color: var(--color-text);

    &::placeholder {
      color: var(--color-grey);
    }

    &:focus ~ span {
      display: block;
    }
  }

  span {
    color: #FC8503;
    font-size: 0.65rem;

    display: none;
    margin-top: 0.2rem;

    position: absolute;
    top: 100%;
    left: 1rem;
  }

  @media screen and (max-width: 720px) {
    margin-right: 0.3rem;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 500px) {
    max-width: initial;
  }
`;

export const ListFilter = styled.ul`
  width: fit-content;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;

  li {
    margin-right: 1rem;
    width: 100px;
    height: 100%;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 500px) {
    width: 70px;
    height: fit-content;
    position: absolute;
    top: 100%;
    right: 1rem;
    margin-top: 0.25rem;
    padding: 0.5rem 0;

    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    border-radius: 10px;

    display: none;
    flex-direction: column;

    &:hover, &:focus {
      display: flex;
    }
    
    li {
      width: 100%;
      margin-right: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

      &:last-child {
        margin-bottom: 0;
        border: none;
      }
    }
  }
`;

export const BoxInputCheckbox = styled.label`
  cursor: pointer;
  position: relative;

  width: 100%;
  height: 100%;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  input {
    opacity: 0;
    height: 0;
    width: 0;
    position: absolute;

    &:checked ~ span {
      background-color: var(--color-main);
      color: var(--color-white);
    }
  }

  span {
    width: 100%;
    height: 40px;

    border-radius: 50px;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);

    color: var(--color-text);
    font-weight: 500;
    font-size: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 720px) {
    max-width: 70px;
    margin-right: 0.3rem;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 500px) {
    input:checked ~ span {
      background-color: var(--color-white);
      color: var(--color-main);
    }

    span {
      border-radius: 0;
      box-shadow: none;
    }
  }
`;

export const ButtonFilter = styled(buttonFlexCenter)`
  height: 40px;
  width: 40px;

  border-radius: 50px;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);

  color: var(--color-text);
  transition: color 0.2s;

  display: none;

  &:hover, &:focus {
    color: var(--color-main);
    width: 110px;
  }

  &:hover ~ ul, &:focus ~ ul {
    display: flex;
  }

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;