import styled, { css, keyframes } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { fluidTypography } from '../../styles/fluidTypography';
import { fadeInY } from '../../styles/animation';
//import image from '../../assets/img/background.jpg'

export const HomeBlock = styled.div`
	position: absolute;
    top: 0;
    left: 0;
	display: flex;
	height: 100%;
	width: 100%;
	-webkit-box-flex: 1;
	flex-grow: 1;
	overflow: hidden;
	@media (max-width: ${breakpoints.xxl}) {
	    padding-botton: 3rem;
	}
	@media (max-width: ${breakpoints.lg}) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		gap: clamp(1.5rem, 2vw, 2.5rem);
		height: auto;
		min-height: 80vh;
		//padding: clamp(1rem, 2vw, 1.5rem);
		padding-top: 0;
		align-items: top;
		justify-content: top;
	&::before {
	    display: none;
	}     
	}
	
	@media (max-width: ${breakpoints.md}) {
		&::before {
		height: 100vh;
		}
	}
	@media (max-width: ${breakpoints.sm}) {
		grid-template-rows: 1fr;
		
	}	
`;
export const HomeWrapper = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    min-width: 0;
`
export const HomeTextBlock = styled.div`
	/* display: flex;
	//flex-direction: column;
	//gap: clamp(3.4rem, 1.5vw, 4.3rem);
	justify-content: space-between;
	animation: ${fadeInY} 0.5s ease-in;

	 */
	position: relative;
    z-index: 1;
    width: 97.6rem;
    margin: 0;

    background-color: #c8d2e6;
    -webkit-transform: skew(-22.5deg) translateZ(0);
    transform: skew(-22.5deg) translateZ(0);
    will-change: transform;
}
	@media (max-width: ${breakpoints.lg}) {
		gap: clamp(0.8rem, 1.5vw, 1.5rem);
	}
	@media (max-width: ${breakpoints.md}) {
		gap: 2rem;
	}
`;

export const HomeTitle = styled.h1`
     width: 100%;
	${fluidTypography({ max: 32, min: 28 })}
	line-height: 1.2;
	margin: 0;
	font-weight: 700;
	color: #555a69;
	text-align: left;
	
	@media (max-width: ${breakpoints.lg}) {
	    color: #555a69;
		${fluidTypography({ max: 30, min: 26 })};
	
	}
	
	@media (max-width: ${breakpoints.md}) {
	   	${fluidTypography({ max: 24, min: 22 })}
	}
`;



export const HomeText = styled.div`
    display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
    //gap: clamp(2.4rem, 1.5vw, 3.3rem);
	${fluidTypography({ max: 18, min: 16 })}
	line-height: 1.6;
	margin: 0;
	color: #555a69;
	.date {
		font-weight: bold;
		display: block;
		margin-bottom: 10px;
	}
	
	@media (max-width: ${breakpoints.lg}) {
	    color: #555a69;
		${fluidTypography({ max: 16, min: 14 })}
	}
	
	
`;

export const ImgContainer = styled.div`
    position: absolute;
	width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    margin: 0;
    overflow: hidden;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    z-index: 0;
	padding-left: 20rem;
    
}
	

	@media (max-width: ${breakpoints.xxl}) {
		clip-path: polygon(40% 0, 95% 0, 70% 100%, 13% 100%);
	}
	
	/* @media (max-width: ${breakpoints.xl}) {
		clip-path: polygon(40% 0, 95% 0, 75% 100%, 15% 100%);
	} */
	
	@media (max-width: ${breakpoints.lg}) {
	  	clip-path: none;
		border-radius: 12px;
		min-height: 280px;
		max-height: 400px;
		&::after {
		clip-path: none;
		}
	}
	
	@media (max-width: ${breakpoints.md}) {
		min-height: 200px;
		max-height: 300px;
		border-radius: 8px;
	}
	@media (max-width: ${breakpoints.sm}) {
		display: none;
		height: 0;
	}	
`;
export const HomeBackground = styled.div`
	width: calc(100% - 148rem);
	height: 100%;
	transform: skewX(-22.5deg) translateZ(0);
	will-change: transform;
	position: absolute;
	top: 0;
	right: 0;
	background-color: #555a69;

	&::after {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	transform: translateX(99%);
	width: 200%;
	height: 100%;
	background-color: #555a69;
	
	}
`
export const HomeAkkut = styled.div`
display: block;
    position: absolute;
    opacity: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: #d7ff23;
    width: 11.5rem;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    -webkit-transform: skew(-22.5deg) translate3d(152rem,22.59259vh,0);
    transform: skew(-22.5deg) translate3d(152rem,22.59259vh,0);
    height: 49.38272vh;
`
export const ImgBlock = styled.div<{ image: string }>`
	height: 100%;
	background-color: #555a69;
	background-image: url(${props => props.image});;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	transition: opacity 0.5s ease, background-image 0.5s ease;
	position: relative;
	will-change: transform, opacity;
	
`;

export const NavigationDots = styled.div`
	display: flex;
	gap: 12px;
	margin-top: 40px;
	position: relative;
	z-index: 2;
`;

export const Dot = styled.button<{ active: boolean }>`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	border: none;
	background: ${props => props.active ? '#c8d2e6' : '#ccc'};
	cursor: pointer;
	transition: all 0.3s ease;
	padding: 0;
	
	&:hover {
		transform: scale(1.2);
		background: #8237FF;
	}
`;
export const TextWrapper = styled.div`
	width: 100%;
	max-width: 600px;
	//position: relative;
	//height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

// Контейнер для изображения с анимацией
export const ImageWrapper = styled.div`
	width: 95%;
	height: 100%;
	position: relative;
	overflow: hidden;
`;
// В HomeView.styled.ts добавить:

const slideInFromRight = keyframes`
	0% {
		transform: translateX(100%);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`;

const slideOutToLeft = keyframes`
	0% {
		transform: translateX(0);
		opacity: 1;
	}
	100% {
		transform: translateX(-100%);
		opacity: 0;
	}
`;

export const SlideContent = styled.div<{ 
	$isTransitioning: boolean; 
	$direction: 'left' | 'right';
	$isExiting?: boolean;
}>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	
	${({ $isTransitioning, $isExiting }) => {
		if ($isExiting && $isTransitioning) {
			return css`
				animation: ${slideOutToLeft} 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
			`;
		}
		
		if ($isTransitioning && !$isExiting) {
			return css`
				animation: ${slideInFromRight} 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
			`;
		}
		
		return css`
			transform: translateX(0);
			opacity: 1;
		`;
	}}
`;