import styled from 'styled-components';
import {fadeInY} from '../../styles/animation';
import {breakpoints} from '../../styles/breakpoints';
import {fluidTypography} from '../../styles/fluidTypography';
import { ItemIcon } from '../../styles/shared';

export const EventsBlock = styled.div`
	--events-gap: clamp(2rem, 2.6vw, 5rem);
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: var(--events-gap);
	animation: ${fadeInY} 0.5s ease-in;
	z-index: 1;
	
	
`;

export const EventsItem = styled.div`
	--item-padding-left: clamp(1.6rem, 1.6vw, 3rem);

	position: relative;
	flex: 1 1 calc((100% - 2 * var(--events-gap)) / 3);
	max-width: calc((100% - 2 * var(--events-gap)) / 3);
	min-width: 0;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	gap: clamp(0.8rem, 0.63vw, 1.2rem);
	padding-left: var(--item-padding-left);
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
		will-change: transform;
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

	@media (max-width: ${breakpoints.xxl}) {
		flex-basis: calc((100% - 2 * var(--events-gap)) / 3);
		max-width: calc((100% - 2 * var(--events-gap)) / 3);
	}
	@media (max-width: ${breakpoints.lg}) {
		flex-basis: calc((100% - var(--events-gap)) / 2);
		max-width: calc((100% - var(--events-gap)) / 2);
	}
	@media (max-width: ${breakpoints.md}) {
		flex-basis: 100%;
		max-width: 100%;
	}
`;

export const SelectedItem = styled.div`
	--marker-width: clamp(0.6rem, 0.42vw, 0.8rem);
	--marker-height: clamp(2rem, 1.37vw, 2.6rem);
	--marker-offset: clamp(1.6rem, 1.6vw, 3rem);

	position: relative;
	display: flex;
	flex-direction: column;
	gap: clamp(1.2rem, 1.05vw, 2rem);
	color: #c8d2e6;
	width: 85%;
	min-width: 0;
	padding-left: var(--marker-offset);

	h2 {
		${fluidTypography({max: 20, min: 16})}
	}
	p {
		${fluidTypography({max: 16, min: 14})}
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: var(--marker-width);
		height: var(--marker-height);
		background: #d7ff23;
		transform: skew(-22deg);
		pointer-events: none;
		z-index: 1;
	}

	@media (max-width: ${breakpoints.xxl}) {
		width: 80%;
	}
	@media (max-width: ${breakpoints.lg}) {
		width: 70%;
	}
	@media (max-width: ${breakpoints.md}) {
		width: 100%;
	}
`;
export const NavBack = styled.div`
	display: flex;
	align-items: center;
	gap: clamp(0.8rem, 0.63vw, 1.2rem);
	height: clamp(2.4rem, 1.58vw, 3rem);
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

export const EventPageBlock = styled.div`
	--event-gap: clamp(4rem, 2.6vw, 5rem);

	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: flex-start;
	gap: var(--event-gap);
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
		gap: var(--event-gap);
		padding-top: 3rem;
	}
`;