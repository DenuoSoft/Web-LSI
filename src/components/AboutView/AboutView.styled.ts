import styled from 'styled-components';
import { fluidTypography } from '../../styles/fluidTypography';
//import image from '../../assets/img/dubai-1.jpg'

export const AboutBlock = styled.div`
    width: 100%;   
    display: flex;
    padding: 0 10rem;
    //flex-direction: column;
    gap: 5rem;
    color: #c8d2e6;
    z-index: 1;
    &::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 18rem;
    right: 39rem;
    bottom: 25rem;
    width: 11.5rem;
    -webkit-transform: skewX(-22.5deg);
    -ms-transform: skewX(-22.5deg);
    transform: skewX(-22.5deg);
    background: #d7ff23;

    }
`
export const AboutItem = styled.div`
position: relative;
width: 15%;
 ${fluidTypography({ max: 20, min: 16 })}
 font-weight: bold;
 
 &::before {
    content: "";
    position: absolute;
    left: -3.6rem;
    //top: calc(50% - 1.3rem);
    width: .8rem;
    height: 2.6rem;
    -webkit-transform: skew(-22deg) scale(0);
    -ms-transform: skew(-22deg) scale(0);
    transform: skew(-22deg) scale(1);
    background: #d7ff23;
}
`

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
`

export const AboutTitle = styled.h1`
    color: #f5f0d2;
    font-weight: normal;
`

export const AboutText = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
${fluidTypography({ max: 20, min: 16 })}
    
`
export const AboutImage = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 70rem;
    height: 100%;
    -webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='452' height='733' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M452 733V0H305.5L0 733h452z' fill='%23555A69'/%3E%3C/svg%3E") center left/cover;
    mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='452' height='733' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M452 733V0H305.5L0 733h452z' fill='%23555A69'/%3E%3C/svg%3E") center left/cover;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    img {

    display: block;
    width: 100%;
    height: 100%;
    -o-object-position: center;
    object-position: center;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center right;
    object-position: center right;

    }        

`