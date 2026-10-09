import styled from 'styled-components';
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
	margin-bottom: 5rem;
	color: var(--text);
	padding: 2rem 5rem;
	${fluidTypography({max: 64, min: 16})}
	font-weight: normal;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 1.2rem;
		height: 5rem;
		-webkit-transform: skew(-22deg) scale(0);
		-ms-transform: skew(-22deg) scale(0);
		transform: skew(-22deg) scale(1);
		background: #d7ff23;
	}
`;

export const PeopleGrid = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	row-gap: 4rem;
	padding: 0 10rem;

	@media (max-width: ${breakpoints.md}) {
		row-gap: 2rem;
		padding: 0 2rem;
	}
	@media (max-width: ${breakpoints.xs}) {
		row-gap: 1rem;
	}
`;

export const PeopleItem = styled.div`
	width: calc(100% / 4);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 3rem;
	padding: 2.4rem;
	cursor: pointer;
	position: relative;
	z-index: 1;

	&:hover {
		z-index: 2;
	}

	@media (max-width: ${breakpoints.xl}) {
		width: calc(100% / 3);
	}
	@media (max-width: ${breakpoints.md}) {
		width: calc(100% / 2);
		row-gap: 2rem;
	}
	@media (max-width: ${breakpoints.sm}) {
		width: 100%;
		row-gap: 1rem;
	}
`;

export const ItemBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

// Должен идти после ItemBadgeWrap, так как ссылается на него в селекторе
export const PeopleWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;

	/* бейджи показываются при наведении на карточку */
`;

/* Обёртка под картинку: относительно неё позиционируется название */
export const ImageWrap = styled.div`
	--w: 10rem;
	--h: 15rem;
	--s: 1.5; /* масштаб при hover */
	--skew: 0.4142; /* tan(22.5deg) */

	position: relative;
	width: fit-content;

	@media (max-width: ${breakpoints.lg}) {
		--w: 10rem;
		--h: 15.3rem;
	}

	@media (max-width: ${breakpoints.sm}) {
		--h: 14.7rem;
		width: 100%;
	}
`;

export const ButtonReveal = styled.div`
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.4s ease;

	${ImageWrap}:hover & {
		opacity: 1;
		pointer-events: auto;
		animation: ${fadeInX} 0.6s ease-in;
	}
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
	content: "";
	top: 0;
	left: 0;
	width: var(--w);
	height: var(--h);
	background-color: rgba(200, 210, 230, 0.7);
	transition: background-color 0.8s ease;
	} 
	${ImageWrap}:hover & {
		transform: skewX(-22.5deg) scale(var(--s)) translateZ(0);
		&::after {
		display: none;
		
		}
		
	}

	@media (max-width: ${breakpoints.sm}) {
		width: 100%;
	}
`;

// Должен идти после ImageBlock, так как ссылается на него в селекторе
export const ItemWrap = styled.div`
	position: absolute;
	bottom: calc(var(--h) * (var(--s) - 1) / -2);
	left: calc(
		100% + var(--w) * (var(--s) - 1) / 2 - var(--h) * var(--s) * var(--skew) /
			2 + 3rem
	);

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

	${ImageWrap}:hover & {
		opacity: 1;
		transform: translateX(0);
	}

	@media (max-width: ${breakpoints.sm}) {
		left: auto;
		right: 0;
	}
`;

export const ItemTitle = styled.h6`
	font-weight: bold;
	white-space: nowrap;
`;
export const ItemPosition = styled.h6`
	font-weight: normal;
	white-space: nowrap;
	${fluidTypography({max: 20, min: 10})}
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

	${PeopleItem}:hover & {
		background-size: 110%;
	}

	@media (max-width: ${breakpoints.sm}) {
		box-shadow: none;
	}
`;
