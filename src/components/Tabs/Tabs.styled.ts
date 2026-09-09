import styled from 'styled-components';
import { fluidTypography } from '../../styles/fluidTypography';
import { breakpoints } from '../../styles/breakpoints';

export const TabsWrap = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-around;
   gap: 15rem;
   z-index: 1;
`

export const TabsBlock = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
    gap: 4rem;
	z-index: 2;
   	@media (max-width: ${breakpoints.sm}) {
		 width: 18rem;
		}
`;
export const TabsItem = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 0.5rem;
    ${fluidTypography({max: 26, min: 16})};
    cursor: pointer;
    color: ${({$isActive}) => $isActive ? '#d7ff23' : '#c8d2e6'};
    font-weight: ${({$isActive}) => $isActive ? 'bold' : 'normal'};
    transition: color 0.3s ease;
    position: relative;
    width: fit-content; /* Блок по ширине контента */
    
    .tab-text {
        display: inline-block;
        white-space: nowrap;
        position: relative;
        z-index: 1;
    }
    
    &::after {
        content: "";
        display: inline-block;
		width: 550px;
        //width: ${({$isActive}) => $isActive ? '550px' : '0'};
        height: 1px;
		z-index: -1;
        background: #c8d2e6;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        flex-shrink: 0;
        opacity: ${({$isActive}) => $isActive ? 1 : 0};
        transform: scaleX(${({$isActive}) => $isActive ? 1 : 0});
        transform-origin: left;
		
    }
    
    &:hover {
        color: #d7ff23;
        
        &::after {
            width: 550px;
            opacity: 1;
            transform: scaleX(1);
        }
    }
`;
export const TabsAkkut = styled.div`
	display: block;
    position: absolute;
    opacity: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: #d7ff23;
    width: 50rem;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    -webkit-transform: skew(-22.5deg) translate3d(0,0.59259vh,0);
    transform: skew(-22.5deg) translate3d(0,0.59259vh,0);
    height: 59.38272vh;
	z-index:3;
`
export const TabContent = styled.div`
	display: flex;
	position: relative;
    width: 20%;
	/* transform: skewX(-22.5deg) translateZ(0);
	will-change: transform; */
	
`;
