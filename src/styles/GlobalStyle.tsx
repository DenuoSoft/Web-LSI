import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import Graphik from '../assets/fonts/GraphikLC-Regular.woff2';
import { fluidTypography } from './fluidTypography';

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
    src: url('${Graphik}') format('woff2');
    font-style: normal;
    font-display: swap;
  }

  body {
   
    font-family: 'Graphik', Arial, sans-serif;
    line-height: 1.429;
    transition: background-color 0.2s;
   
  }

  :root {
    --text-size-normal: 1rem;
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
h1 {
    ${fluidTypography({max: 32, min: 24})}
    margin: 0;
    line-height: 1.2;
  }

//  h2 {
//    ${fluidTypography({max: 36, min: 26})}
//    margin: 0;
//    line-height: 1.25;
//  }

  h3 {
    ${fluidTypography({max: 32, min: 24})}
    margin: 0;
    line-height: 1.3;
  }

  h4 {
    ${fluidTypography({max: 28, min: 22})}
    margin: 0;
    line-height: 1.35;
  }

  h5 {
    ${fluidTypography({max: 24, min: 18})}
    margin: 0;
    line-height: 1.4;
  }

  h6 {
    ${fluidTypography({max: 22, min: 18})}
    margin: 0;
    line-height: 1.45;
  }

`;


