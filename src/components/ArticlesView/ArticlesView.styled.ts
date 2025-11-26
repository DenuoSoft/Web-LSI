import styled from "styled-components";
import { fadeInY } from "../../styles/animation";

export const ArtclesBlock = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    animation: ${fadeInY} 0.5s ease-in;
`
export const ArticlesItem = styled.div`
    width: calc((100% - 6rem) / 4);
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    gap: 1.2rem;
    padding: 2rem;
    border-left: 1px solid #555a69;
`
