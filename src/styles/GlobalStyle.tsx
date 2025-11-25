import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';


export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
html {
  font-size: 62.5%; 
}
  html, body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    display: none;
  }

  @font-face {
    font-family: 'Graphik';
    src: url('/fonts/GraphikLC-Regular.woff2') format('woff2');
    font-style: normal;
    font-display: swap;
  }

  body {
   
    font-family: 'Graphik', Arial, sans-serif;
    line-height: 1.429;
    transition: background-color 0.2s;
  }

  :root {
    --text-size-normal: 1.6rem;
    --text-size-14px: 1.4rem;
    --text-size-12px: 1.2rem;
    --box-shadow:  3px 3px 12px rgba(98, 121, 167, 0.1);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button, input {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;