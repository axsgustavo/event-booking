import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--max-width);
  width: 100%;
  height: 100%;

  padding: 1rem;
  margin: 2rem 0;
  border-radius: 5px;
  background-color: var(--color-white);

  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: var(--color-white);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-grey);
    border-radius: 50px;
  }

  .day-start {
    background-color: dodgerblue;
  }
`;