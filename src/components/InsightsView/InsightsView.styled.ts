import styled from 'styled-components';
import {fadeInY} from '../../styles/animation';
import {breakpoints} from '../../styles/breakpoints';
import {fluidTypography} from '../../styles/fluidTypography';

export const InsightsBlock = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	//flex-direction: column;
	gap: 5rem;
	//margin-top: 2rem;
	animation: ${fadeInY} 0.5s ease-in;
	z-index: 1;
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
export const SelectedItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	color: #555a69;
	h2 {
		${fluidTypography({max: 20, min: 16})}
	}
	p {
		${fluidTypography({max: 16, min: 14})}
	}
`;
export const HeadingTag = styled.div``;
