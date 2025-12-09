import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import { fadeInY } from '../../styles/animation';
import { fluidTypography } from '../../styles/fluidTypography';

export const ServicesBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 4rem;
	margin-top: 4rem;
	animation: ${fadeInY} 0.5s ease-in;
`;
export const ServicesItem = styled.div`
	width: calc(100% / 3);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
	gap: 3rem;
	padding: 3.2rem;
	border-left: 1px solid #c8c8c8;
	&:nth-child(3n) {
		border-right: 1px solid #c8c8c8;
	}
	@media (max-width: ${breakpoints.lg}) {
		width: calc(100% / 2);
		&:nth-child(2n) {
			border-right: 1px solid #c8c8c8;
		}
	}
	@media (max-width: ${breakpoints.md}) {
		width: 100%;

		border-right: 1px solid #c8c8c8;
	}
`;
export const ItemTitle = styled.h5`
	
`;
export const ItemText = styled.p`
	${fluidTypography({max: 16, min: 14})}
`;
export const ItemNav = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 2rem;
	cursor: pointer;
`;
