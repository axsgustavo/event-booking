import styled from "styled-components";
import { buttonFlexCenter } from "../../styles/DefinitionsStyle";

export const Form = styled.form`
  width: 100%;

  h3 {
    margin-bottom: 2rem;
  }

  .react-calendar {
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: transparent;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1rem;

  > span {
    color: var(--color-grey);
    font-size: 0.7rem;

    position: absolute;
    top: -1rem;
    left: 0;
  }

  input[type="text"] {
    width: 100%;
    padding: 0.65rem;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

    background-color: transparent;
    font-size: 0.9rem;
    color: var(--color-text);

    ::placeholder {
      color: var(--color-grey);
    }

    :focus ~ span {
      color: var(--color-main);
    }
  }

  label {
    cursor: pointer;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    
    width: 18px;
    height: 18px;

    input[type="color"] {
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0;
    }
  }

`;

export const PickerColor = styled.span<{background: string}>`
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-grey);
  background-color: ${props => props.background || "transparent"};
  border-radius: 50px;
  
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const BoxInputData = styled.div`
  width: 100%;
  margin: 1rem 0;

  gap: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    position: relative;
    margin-top: 1rem;

    span {
      color: var(--color-grey);
      font-size: 0.7rem;

      position: absolute;
      top: -1rem;
      left: 0;
    }

    input {
      width: 100%;
      padding: 0.65rem;
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  
      background-color: transparent;
      font-size: 0.9rem;
      color: var(--color-text);
  
      ::placeholder {
        color: var(--color-grey);
      }

      :focus {
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
      }

      :focus ~ span {
        color: var(--color-main);
      }
    }
  }
`;

export const ButtonCreateNewEvent = styled(buttonFlexCenter)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  background-color: var(--color-main);
  font-size: 0.8rem;
  color: var(--color-white);

  transition: filter 0.2s;

  span {
    margin: 0 0.3rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;