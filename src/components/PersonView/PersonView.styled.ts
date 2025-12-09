import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import {fadeInX} from '../../styles/animation';
import { fluidTypography } from '../../styles/fluidTypography';

export const PersonBlock = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 4rem;
`;
export const PersonWrap = styled.div`
	width: 100%;
	display: flex;
	gap: 8rem;
	animation: ${fadeInX} 0.5s ease-in;
	@media (max-width: ${breakpoints.lg}) {
		flex-direction: column;
		gap: 2rem;
	}
`;
export const PersonImg = styled.div`
	width: 50rem;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	height: 50rem;

	@media (max-width: ${breakpoints.lg}) {
		width: 40rem;
		height: 40rem;
	}
	@media (max-width: ${breakpoints.md}) {
		width: 30rem;
		height: 30rem;
	}
`;
export const InfoBlock = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 2.4rem;
	@media (max-width: ${breakpoints.lg}) {
		width: 100%;
	}
`;
export const ItemTitle = styled.h5`
	
`;

export const Description = styled.div`
	text-align: justify;
	padding: 2.4rem 0;
	border-top: 0.5px solid rgba(0, 0, 0, 0.5);
	${fluidTypography({max: 18, min: 16})}
	@media (max-width: ${breakpoints.md}) {
		font-size: 1.6rem;
	}
`;
export const NavBack = styled.button`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	cursor: pointer;
`;
export const NavBackText = styled.span`
	color: #555a69;
	font-size: clamp(1.4rem, 0.388vw + 1.654rem, 1.8rem);
`;
