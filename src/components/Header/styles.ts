import styled from "styled-components";
import { divFlexCenter } from "../../styles/DefinitionsStyle";

export const Container = styled.header`
  background-color: var(--color-main);
  width: 100%;
  height: 70px;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    cursor: default;
    user-select: none;

    margin-right: 2rem;

    text-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    color: var(--color-white);
    font-size: 1.5rem;
  }
  
  @media screen and (max-width: 500px) {
    padding: 0 0.5rem;
  }
`;

export const Content = styled(divFlexCenter)`
  max-width: var(--max-width);
  width: 100%;
`;