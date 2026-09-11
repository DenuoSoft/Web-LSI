import styled, { css, keyframes } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { fluidTypography } from '../../styles/fluidTypography';
//import { fadeInY } from '../../styles/animation';

export const HomeBlock = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	height: 100%;
	width: 100%;
	flex-grow: 1;
	overflow: hidden;

	/* Базовая ширина, от которой считаем пропорции.
	   При 1440px = 88.6rem, дальше плавно уменьшается.
	   Все блоки (HomeTextBlock, HomeBackground, HomeAkkut) привязаны к этой переменной. */
	--slide-base: clamp(28rem, 45vw, 88.6rem);
	--slide-gap: clamp(1rem, 2.2vw, 3rem);
`;

export const HomeWrapper = styled.div`
	position: relative;
	display: flex;
	flex-grow: 1;
	min-width: 0;
	width: 100%;
	height: 100%;
`;

export const HomeTextBlock = styled.div`
	position: relative;
	z-index: 1;
	width: var(--slide-base);
	min-width: 0;
	flex-shrink: 1;
	margin: 0;
	background-color: #c8d2e6;
	-webkit-transform: skew(-22.5deg) translateZ(0);
	transform: skew(-22.5deg) translateZ(0);
	will-change: transform;

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		right: 0;
		-webkit-transform: translateX(-99%);
		-ms-transform: translateX(-99%);
		transform: translateX(-99%);
		background-color: #c8d2e6;
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
`;

export const HomeText = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: calc(100px + 2rem) 0 clamp(3rem, 6vw, 8rem) clamp(1.6rem, 4vw, 6rem);
	${fluidTypography({ max: 44, min: 16 })}
	line-height: 1.6;
	margin: 0;
	color: #28282d;

	.date {
		font-weight: bold;
		display: block;
		margin-bottom: 10px;
		color: #555a69;
		${fluidTypography({ max: 35, min: 14 })}
	}
	@media (max-width: ${breakpoints.xl}) {
		padding-top: calc(100px + 5rem);
	}

	@media (max-width: ${breakpoints.lg}) {
		padding-top: calc(100px + 4rem);
	}

	@media (max-width: ${breakpoints.md}) {
		padding-top: calc(100px + 3rem);
	}

	@media (max-width: ${breakpoints.sm}) {
		padding-top: calc(100px + 2rem);
	}

	@media (max-width: ${breakpoints.xs}) {
		padding-top: calc(100px + 1.6rem);
	}	
`;

export const TextWrapper = styled.div`
	width: 100%;
	/* Синхронно с HomeTextBlock */
	max-width: calc(var(--slide-base) + 3rem);
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	-webkit-transform: skew(22.5deg) translateZ(0);
	transform: skew(22.5deg) translateZ(0);
	will-change: transform;
	z-index: 2;
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

	@media (max-width: ${breakpoints.sm}) {
		opacity: 0.35;
	}
`;

export const HomeBackground = styled.div`
	/* Тянется синхронно с HomeTextBlock:
	   ширина = 100% минус (HomeTextBlock + зазор) */
	width: calc((100% - var(--slide-base) - var(--slide-gap)) - 30.5vw);
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

	/* На lg: 992px блок HomeBackground убирается */
	@media (max-width: ${breakpoints.lg}) {
		display: none;
	}
`;

export const HomeAkkut = styled.div<{$visible: boolean}>`
	display: block;
	position: absolute;
	opacity: 1;
	flex-shrink: 0;
	background-color: #d7ff23;
	width: clamp(6rem, 12vw, 18.4rem);
	height: 49.38272vh;
	left: calc((var(--slide-base) + var(--slide-gap)) + 28vw);
	top: 22.59259vh;
	-webkit-transform: skew(-22.5deg) translateZ(0);
	transform: skew(-22.5deg) translateZ(0);
	
	clip-path: inset(0 100% 0 0);
      -webkit-clip-path: inset(0 0 0 100%);
      transition:
        clip-path 0.8s ease-out 0.2s,
        -webkit-clip-path 0.8s ease-out 0.2s;

      ${({ $visible }) => $visible && `
      clip-path: inset(0 0 0 0);
    `}


	@media (max-width: ${breakpoints.lg}) {
		left: calc((var(--slide-base) - var(--slide-gap)) );
		z-index: 3;
	}
	
	@media (max-width: ${breakpoints.md}) {
		display: none;
	}
`;

export const ImgBlock = styled.div<{ image: string }>`
	height: 100%;
	background-color: #555a69;
	background-image: url(${props => props.image});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	transition: opacity 0.5s ease, background-image 0.5s ease;
	position: relative;
	will-change: transform, opacity;

	@media (max-width: ${breakpoints.lg}) {
		background-position: center 30%;
	}

	@media (max-width: ${breakpoints.sm}) {
		background-position: center 20%;
	}
`;

export const NavigationDots = styled.div`
	display: flex;
	gap: 12px;
	position: absolute;
	z-index: 10;
	bottom: clamp(3rem, 18vh, 18rem);
	left: clamp(1.6rem, 4vw, 6rem);

	@media (max-width: ${breakpoints.md}) {
		left: 50%;
		transform: translateX(-50%);
	}

	@media (max-width: ${breakpoints.sm}) {
		gap: 8px;
	}
`;

export const Dot = styled.button<{ active: boolean }>`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	border: 1px solid #555a69;
	background: ${props => props.active ? '#555a69' : ''};
	cursor: pointer;
	transition: all 0.3s ease;
	padding: 0;

	&:hover {
		transform: scale(1.2);
		background: #8237FF;
	}

	@media (max-width: ${breakpoints.sm}) {
		width: 10px;
		height: 10px;
	}
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;

	@media (max-width: ${breakpoints.md}) {
		width: 100%;
	}
`;

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