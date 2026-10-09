import styled, {css} from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import {fadeInX, fadeInY} from '../../styles/animation';
import {fluidTypography} from '../../styles/fluidTypography';

interface PeopleImgProps {
	image?: string;
}

export const PeopleBlock = styled.div`
	display: flex;
	row-gap: 4rem;
	z-index: 1;
	animation: ${fadeInY} 0.5s ease-in;

	@media (max-width: ${breakpoints.md}) {
		row-gap: 2rem;
	}
	@media (max-width: ${breakpoints.xs}) {
		row-gap: 1rem;
	}
`;

export const PeopleTitle = styled.div`
	position: relative;
	width: 100%;
	margin-top: 0;
	line-height: 0;
	margin-bottom: clamp(2.4rem, 3vw, 5rem);
	color: var(--text);
	padding: 2rem clamp(2rem, 2.6vw, 5rem);
	${fluidTypography({max: 64, min: 16})}
	font-weight: normal;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: clamp(0.8rem, 0.65vw, 1.2rem);
		height: clamp(3.4rem, 2.6vw, 5rem);
		-webkit-transform: skew(-22deg) scale(0);
		-ms-transform: skew(-22deg) scale(0);
		transform: skew(-22deg) scale(1);
		background: #d7ff23;
	}
`;

export const PeopleGrid = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	row-gap: clamp(2rem, 3vw, 4rem);
	padding: 0 clamp(2rem, 5.3vw, 10rem);
`;

export const PeopleItem = styled.div`
	box-sizing: border-box;
	width: calc(100% / 4); /* > xxl */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 3rem;
	padding: clamp(2rem, 1.3vw, 2.4rem);
	cursor: pointer;
	position: relative;
	z-index: 1;
	-webkit-tap-highlight-color: transparent;

	@media (hover: hover) {
		&:hover {
			z-index: 2;
		}
	}
	&[data-active='true'] {
		z-index: 2;
	}

	@media (max-width: ${breakpoints.xxl}) {
		width: calc(100% / 3);
	}
	@media (max-width: ${breakpoints.lg}) {
		width: calc(100% / 2);
	}
	@media (max-width: ${breakpoints.sm}) {
		width: 100%;
	}
`;

export const ItemBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const PeopleWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
`;

export const ImageWrap = styled.div`
	--w: clamp(8rem, 5.3vw, 10rem); /* ширина картинки */
	--h: calc(var(--w) * 1.5); /* высота, пропорция 2:3 */
	--s: 1.5; /* масштаб в раскрытом состоянии */
	--skew: 0.4142; /* tan(22.5deg) */

	--text-left: calc(
		100% + var(--w) * (var(--s) - 1) / 2 - var(--h) * var(--s) * var(--skew) / 2 +
			3rem
	);

	position: relative;
	width: fit-content;
`;

/* Раскрытое состояние: :hover на устройствах с мышью
   или data-active="true" на карточке (тап на тач-устройствах).
   Hover обёрнут в (hover: hover), чтобы на таче он не «залипал» после тапа.
   Объявлен после ImageWrap и PeopleItem, так как ссылается на них */
const revealed = (styles: ReturnType<typeof css>) => css`
	@media (hover: hover) {
		${ImageWrap}:hover & {
			${styles}
		}
	}
	${PeopleItem}[data-active='true'] & {
		${styles}
	}
`;

export const ButtonReveal = styled.div`
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.4s ease;

	
	& > button {
		width: calc(var(--w) * 0.8);
		height: calc(var(--w) * 0.8);
		left: calc(var(--edge-x) - var(--w) * 0.4);
		right: auto;
		bottom: calc(var(--h) * 0.53);
	}

	${revealed(css`
		opacity: 1;
		pointer-events: auto;
		animation: ${fadeInX} 0.6s ease-in;
	`)}
`;

export const ImageBlock = styled.div`
	position: relative;
	width: var(--w);
	height: var(--h);
	transform: skewX(-22.5deg) scale(1) translateZ(0);
	transform-origin: center;
	transition: transform 0.4s ease;
	overflow: hidden;
	flex-shrink: 0;

	&::after {
		position: absolute;
		content: '';
		inset: 0;
		background-color: rgba(200, 210, 230, 0.7);
		transition: background-color 0.8s ease;
	}

	${revealed(css`
		transform: skewX(-22.5deg) scale(var(--s)) translateZ(0);
		&::after {
			display: none;
		}
	`)}
`;

export const ItemWrap = styled.div`
	position: absolute;
	bottom: calc(var(--h) * (var(--s) - 1) / -2);
	left: var(--text-left);

	z-index: 3;
	width: max-content;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	pointer-events: none;
	opacity: 0;
	color: var(--text);
	transform: translateX(3rem);
	transition:
		opacity 0.4s ease,
		transform 0.4s ease;

	${revealed(css`
		opacity: 1;
		transform: translateX(0);
	`)}

	/* на узких экранах разрешаем перенос, чтобы текст не вылезал за край */
	@media (max-width: ${breakpoints.xs}) {
		width: auto;
		max-width: 16rem;
	}
`;

export const ItemTitle = styled.h6`
	font-weight: bold;
	white-space: nowrap;

	@media (max-width: ${breakpoints.xs}) {
		white-space: normal;
	}
`;

export const ItemPosition = styled.h6`
	font-weight: normal;
	white-space: nowrap;
	${fluidTypography({max: 20, min: 10})}

	@media (max-width: ${breakpoints.xs}) {
		white-space: normal;
	}
`;

export const PeopleImg = styled.div<PeopleImgProps>`
	width: 162%;
	height: 100%;
	margin-left: -31%;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transform: skewX(22.5deg);
	transition: background-size 0.4s ease;

	${revealed(css`
		background-size: 110%;
	`)}
`;