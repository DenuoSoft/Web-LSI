import styled, { css } from 'styled-components';
import { fluidTypography } from '../../styles/fluidTypography';
import { breakpoints } from '../../styles/breakpoints';

export const AboutBlock = styled.div<{ $visible: boolean }>`
	--slide-base: clamp(28rem, 45vw, 70rem);
	--slide-gap: clamp(1rem, 2.2vw, 3rem);
	--slide-padding: clamp(1.5rem, 5vw, 10rem);
	--accent-width: clamp(0.4rem, 0.6vw, 0.8rem);
	--accent-height: clamp(1.4rem, 1.8vw, 2.6rem);
	--stripe-width: clamp(2.5rem, 5.8vw, 11.5rem);
width: 100%;
	display: flex;
	padding: 0 var(--slide-padding);
	gap: var(--slide-gap);
	color: #c8d2e6;
	z-index: 1;
	box-sizing: border-box;

	&::after {
		content: '';
		position: absolute;
		z-index: 2;
		top: 50%;
		transform: translateY(-50%) skewX(-22.5deg);
		height: calc(var(--slide-base) * 0.82);
		width: var(--stripe-width);
		/* центр полоски на стыке картинки и контента */
		right: calc(var(--slide-base) - 30rem);
		background: #d7ff23;

		clip-path: inset(0 0 100% 0);
		transition: clip-path 0.8s ease-out 0.2s;

		${({ $visible }) =>
			$visible &&
			css`
				clip-path: inset(0 0 0 0);
			`}
	}
    @media (max-width: ${breakpoints.xxl}) {
		&::after {
        right: calc(var(--slide-base) - 25rem);
        }
	}
    @media (max-width: ${breakpoints.xl}) {
		&::after {
        right: calc(var(--slide-base) - 22rem);
        }
	}    
	/* lg и меньше — вертикальная раскладка */
	@media (max-width: ${breakpoints.lg}) {
		flex-direction: column;
		padding: 0 var(--slide-gap);

		&::after {
			display: none;
		}
	}
`;

export const AboutItem = styled.div`
	position: relative;
	width: 15%;
	${fluidTypography({ max: 20, min: 16 })}
	font-weight: bold;

	&::before {
		content: '';
		position: absolute;
		left: calc(var(--slide-gap) * -1.2);
		top: calc(var(--accent-height) - 1rem);
		transform: translateY(-50%) skew(-22deg);
		width: var(--accent-width);
		height: var(--accent-height);
		background: #d7ff23;
	}

	@media (max-width: ${breakpoints.lg}) {
		width: 100%;

		&::before {
			left: calc(var(--slide-gap) * -1);
		}
	}
`;

export const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--slide-gap);
	width: calc(100% - var(--slide-base));

	@media (max-width: ${breakpoints.xxl}) {
       width: calc(100% - var(--slide-base) - 5rem); 
	
	}
    @media (max-width: ${breakpoints.lg}) {
		width: 100%;
	}
`;

export const AboutTitle = styled.h1`
	color: #f5f0d2;
	font-weight: normal;
	margin: 0;
`;

export const AboutText = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--slide-gap);
	${fluidTypography({ max: 20, min: 16 })}
`;

export const AboutImage = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: -1;
	width: var(--slide-base);
	height: 100%;
	-webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='452' height='733' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M452 733V0H305.5L0 733h452z' fill='%23555A69'/%3E%3C/svg%3E")
		center left/cover;
	mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='452' height='733' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M452 733V0H305.5L0 733h452z' fill='%23555A69'/%3E%3C/svg%3E")
		center left/cover;
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center right;
	}

	@media (max-width: ${breakpoints.lg}) {
		position: relative;
		width: 100%;
		height: calc(var(--slide-base) * 0.5);
		z-index: 0;
		margin-top: var(--slide-gap);

		-webkit-mask: none;
		mask: none;

		img {
			object-position: center;
			border-radius: var(--slide-gap);
		}
	}
`;