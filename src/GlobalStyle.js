import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', 'Arial', sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }

  /* Add any additional global styles here */
`;
