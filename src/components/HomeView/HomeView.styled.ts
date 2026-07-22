import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { fluidTypography } from '../../styles/fluidTypography';
import { fadeInY } from '../../styles/animation';
import image from '../../assets/img/dubai-1.jpg'

export const HomeBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: clamp(1rem, 3vw, 3rem);
	align-items: stretch;
	height: 100vh;
	min-height: 600px;
	padding-right: clamp(1rem, 2vw, 2rem);
	animation: ${fadeInY} 0.5s ease-in;
	z-index: 1;
	max-width: 1440px;
	margin: 0 auto;
	padding-top: 3rem;
	padding-bottom: 3rem;
	&::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 125vh;
        background-color: #555A69;
        //clip-path: polygon(73% 0, 100% 0, 100% 100%, 50% 100%);
		clip-path: polygon(0% 0%, 75% 0%, 50% 100%, 0% 100%);
    }
	
	@media (max-width: ${breakpoints.lg}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		gap: clamp(1.5rem, 2vw, 2.5rem);
		height: auto;
		min-height: 80vh;
		padding: clamp(1rem, 2vw, 1.5rem);
		align-items: top;
		justify-content: top;
	}
	
	@media (max-width: ${breakpoints.md}) {
		gap: 1.5rem;
		padding: 1rem;
		&::before {
		height: 100vh;
		}
	}
`;

export const HomeTextBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: clamp(3.4rem, 1.5vw, 4.3rem);
	//justify-content: center;
	//padding: clamp(0.5rem, 1vw, 1.5rem);
	z-index: 1;
	@media (max-width: ${breakpoints.lg}) {
		gap: clamp(0.8rem, 1.5vw, 1.5rem);
		
		padding: 0.5rem;
	}
	
	@media (max-width: ${breakpoints.md}) {
		gap: 0.8rem;
	}
`;

export const HomeTitle = styled.h1`
     width: 100%;
	font-size: clamp(1.5rem, 3.5vw, 3.5rem);
	line-height: 1.2;
	margin: 0;
	font-weight: 700;
	//color: #1a1a2e;
	color:#c8d2e6;
	text-align: left
	//text-align-last: justify;
	@media (max-width: ${breakpoints.lg}) {
		font-size: clamp(1.3rem, 3vw, 2.2rem);
		text-align: center;
	}
	
	@media (max-width: ${breakpoints.md}) {
		font-size: clamp(1.1rem, 2.5vw, 1.8rem);
	}
`;

export const HomeLabel = styled.div`
	display: flex;
	align-items: center;
	gap: clamp(0.5rem, 0.8vw, 0.8rem);
	width: auto;
	min-width: 200px;
	max-width: 100%;
	padding: clamp(0.3rem, 0.5vw, 0.6rem) clamp(0.6rem, 1vw, 1.2rem);
	background-color: rgba(85, 90, 105, 0.1);
	border-radius: 0.4rem;
	font-size: clamp(0.7rem, 0.9vw, 1rem);
	color: #555a69;
	border: 1px solid rgba(85, 90, 105, 0.1);
	
	@media (max-width: ${breakpoints.lg}) {
		min-width: 0;
		width: auto;
		margin: 0 auto;
		font-size: clamp(0.6rem, 0.8vw, 0.9rem);
		padding: 0.3rem 0.8rem;
	}
	
	@media (max-width: ${breakpoints.md}) {
		font-size: 0.7rem;
		padding: 0.2rem 0.6rem;
		gap: 0.4rem;
	}
`;


export const HomeText = styled.p`
    display: flex;
	flex-direction: column;
    gap: clamp(2.4rem, 1.5vw, 3.3rem);
	// text-align: justify;
	${fluidTypography({ max: 18, min: 14 })}
	line-height: 1.6;
	margin: 0;
	//color: #2d2d44;
	color: #c8d2e6;
	@media (max-width: ${breakpoints.lg}) {
		text-align: justify;
		${fluidTypography({ max: 16, min: 13 })}
	}
	
	@media (max-width: ${breakpoints.md}) {
		${fluidTypography({ max: 14, min: 12 })}
		line-height: 1.5;
	}
`;

export const ImgContainer = styled.div`
	position: relative;
	width: 100%;
	height: 72vh;
	min-height: 400px;
	
	clip-path: polygon(40% 0, 100% 0, 60% 100%, 0 100%);
	
	@media (max-width: ${breakpoints.xxl}) {
		clip-path: polygon(32% 0, 100% 0, 70% 100%, 0 100%);
	}
	
	@media (max-width: ${breakpoints.xl}) {
		clip-path: polygon(32% 0, 90% 0, 60% 100%, 0 100%);
	}
	
	@media (max-width: ${breakpoints.lg}) {
	  
		clip-path: none;
		border-radius: 12px;
		min-height: 280px;
		max-height: 400px;
	}
	
	@media (max-width: ${breakpoints.md}) {
		min-height: 200px;
		max-height: 300px;
		border-radius: 8px;
	}
`;

export const ImgBlock = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${image});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	transition: opacity 0.5s ease, background-image 0.5s ease;
	position: relative;
	
	
`;