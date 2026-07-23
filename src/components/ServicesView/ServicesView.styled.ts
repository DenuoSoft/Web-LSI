import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import {fadeInY} from '../../styles/animation';
import {fluidTypography} from '../../styles/fluidTypography';

export const ServicesBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 8rem;
	margin-top: 4rem;
	color: #555a69;
	animation: ${fadeInY} 0.5s ease-in;
	z-index: 1;
`;
export const ServicesItem = styled.div`
	width: calc(100% / 3);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
	gap: 3rem;
	padding: 0 3.2rem;
	border-left: 1px solid #8237ff;
	&:nth-child(3n) {
		border-right: 1px solid #8237ff;
	}
	@media (max-width: ${breakpoints.lg}) {
		width: calc(100% / 2);
		&:nth-child(2n) {
			border-right: 1px solid #8237ff;
		}
	}
	@media (max-width: ${breakpoints.md}) {
		width: 100%;

		border-right: 1px solid #8237ff;
	}
`;
export const ItemTitle = styled.h5``;
export const ItemText = styled.p`
	${fluidTypography({max: 16, min: 14})}
	&:hover {
		color: #8237ff;
	}
`;
export const ItemNav = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 2rem;
	cursor: pointer;
`;
