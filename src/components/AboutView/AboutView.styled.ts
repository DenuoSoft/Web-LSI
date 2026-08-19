import styled from 'styled-components';
import { fluidTypography } from '../../styles/fluidTypography';

export const AboutBlock = styled.div`
    width: 100%;   
    display: flex;
    flex-direction: column;
    gap: 4rem;
    color: #555a69;
    z-index: 1;

`
export const AboutTitle = styled.h1`
    
`

export const AboutText = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
${fluidTypography({ max: 24, min: 16 })}
    
`