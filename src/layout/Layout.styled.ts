import styled from "styled-components";

export const BackgroundLayer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
    background-color: #c8d2e6;
    pointer-events: none;
    
    
`;

export const LayoutBlock = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: minmax(0, auto) minmax(30rem, 140rem) minmax(0, auto);
    grid-template-rows: 10rem 1fr auto;
    grid-template-areas: 
    "header header header" 
    ". main ."
    " footer footer footer ";
    gap: 3rem;
  

`
export const Main = styled.main`
 grid-area: main;
 padding-top: 1.6rem;
 display: flex;
 flex-grow: 1;
 flex-direction: column;
 align-items: center;

`