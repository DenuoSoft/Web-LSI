import styled from 'styled-components';
import {fadeInY} from '../../styles/animation';
import {breakpoints} from '../../styles/breakpoints';
import {fluidTypography} from '../../styles/fluidTypography';
import { ItemIcon } from '../../styles/shared';

export const InsightsBlock = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	//flex-direction: column;
	gap: 5rem;
	//margin-top: 2rem;
	animation: ${fadeInY} 0.5s ease-in;
	z-index: 1;
	@media (max-width: ${breakpoints.xl}) {
	   width: 85%;	
	   gap: 2rem;
	}
`;
export const InsightsItem = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	gap: 1.2rem;
	padding-left: 3rem;
	width: calc(100% / 3);
	color: #c8d2e6;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 100%;
		background: #d7ff23;
		transform: scaleY(0);
		transform-origin: top;
		//will-change: transform;
		transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	}
	&:hover::before {
		transform: scaleY(1);
	}

	h2 {
		${fluidTypography({max: 20, min: 16})}
	}
	p {
		${fluidTypography({max: 16, min: 14})}
	}
	@media (max-width: ${breakpoints.xl}) {
		width: calc((100% - 4rem) / 3);
	}
	@media (max-width: ${breakpoints.lg}) {
		width: calc((100% - 2rem) / 2);
	}
	@media (max-width: ${breakpoints.md}) {
		width: 100%;
	}
`;
export const InsightPageBlock = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: flex-start;
	gap: 5rem;
	color: #c8d2e6;
	z-index: 1;
	h2 {
		${fluidTypography({max: 20, min: 16})}
	}
	p {
		${fluidTypography({max: 16, min: 14})}
	}
	@media (max-width: ${breakpoints.md}) {
		flex-direction: column;
	}		
`;
export const InsightPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 85%;
  @media (max-width: ${breakpoints.xxl}) {
		width: 80%;
	}
	@media (max-width: ${breakpoints.xl}) {
		width: 75%;
	}
	@media (max-width: ${breakpoints.lg}) {
		width: 70%;
	}	
	@media (max-width: ${breakpoints.md}) {
		width: 100%;
		padding-left: 3rem;
	}				
`
export const InsightPageTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		left: -3rem;
		width: 0.8rem;
		height: 2.6rem;
		-webkit-transform: skew(-22deg) scale(0);
		-ms-transform: skew(-22deg) scale(0);
		transform: skew(-22deg) scale(1);
		background: #d7ff23;
		@media (max-width: ${breakpoints.lg}) {
		height: 2.2rem;
		@media (max-width: ${breakpoints.md}) {
		left: -2rem;
	}		
	}
	}
`
export const InsightPageContent = styled.div`
    display: flex;
   
`;
export const NavBack = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	height: 3rem;
	cursor: pointer;
	color: #c8d2e6; 
	 ${ItemIcon} {
    color: inherit;
  }

  svg path {
    fill: currentColor;
    transition: fill 0.2s ease;
  }

  &:hover {
    color: #d7ff23;
  }
 
  &:hover ${ItemIcon} {
    color: #d7ff23;
    border-color: #d7ff23;
  }

  &:hover svg path {
    fill: #d7ff23;
  }
`;
export const NavBackText = styled.span`
	color: inherit;
	font-size: clamp(1.4rem, 0.388vw + 1.654rem, 1.8rem);
	
`;
export const HeadingTag = styled.div``;
