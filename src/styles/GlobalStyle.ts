import styled, { createGlobalStyle } from "styled-components";

export const color = {
  main: "#0792E3",
  white: "#FFFFFF",
  whiteDark: "#F5F5F5",
  grey: "#B7B7B7",
  black: "#11161B",

  background: "#F5F9FF",

  title: "#303338",
  text: "#707378",
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-main: ${color.main};
    --color-white: ${color.white};
    --color-white-dark: ${color.whiteDark};
    --color-grey: ${color.grey};
    --color-black: ${color.black};

    --color-background: ${color.background};

    --color-title: ${color.title};
    --color-text: ${color.text};

    --box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);

    --max-width: 1336px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media screen and (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--color-title);
    font-weight: 700;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: 500;
  }

  input {
    outline: none;
    font-weight: 500;
  }

  .react-modal {
    width: 400px;
    padding: 30px;
    position: relative;
    
    background-color: var(--color-background);
    border-radius: 10px;
  }

  .react-modal-overlayer {
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.65);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-button-close {
    position: absolute;
    top: 10px;
    right: 10px;
    
    background-color: transparent;
    transition: color 0.2s;
    font-size: 20px;

    &:hover {
      color: var(--color-main);
    }
  }
`;

export const Content = styled.div`
  max-width: var(--max-width);
  width: 100%;
`;