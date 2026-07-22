import styled from "styled-components";
import { fadeInY } from "../../styles/animation";
import { breakpoints } from "../../styles/breakpoints";
import {fluidTypography} from '../../styles/fluidTypography';

export const InsightsBlock = styled.div`
    width: 100%;
    display: flex;
   flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
    animation: ${fadeInY} 0.5s ease-in;
    z-index: 1;
`
export const InsightsItem = styled.div`
    width: calc((100% - 6rem) / 4);
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    gap: 1.2rem;
    padding: 2rem;
    h2 {
    ${fluidTypography({max: 20, min: 16})}
    }
    p {
    ${fluidTypography({max: 16, min: 14})}
    }
    border-left: 1px solid #8237FF;
    @media (max-width: ${breakpoints.xl}) {
            width: calc((100% - 4rem) / 3);
    }
    @media (max-width: ${breakpoints.lg}) {
            width: calc((100% - 2rem) / 2);
    }
    @media (max-width: ${breakpoints.md}) {
           width: 100%;
    }
`
export const SelectedItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2 {
    ${fluidTypography({max: 20, min: 16})}
    }
    p {
    ${fluidTypography({max: 16, min: 14})}
    }
`