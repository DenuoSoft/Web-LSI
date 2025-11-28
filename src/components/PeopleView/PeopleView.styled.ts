import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import { fadeInY } from '../../styles/animation';

export const PeopleBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 4rem;
	margin-top: 2rem;
	color: #555a69;
	animation: ${fadeInY} 0.5s ease-in;
	
	@media (max-width: ${breakpoints.md}) {
		row-gap: 2rem;
	}
	@media (max-width: ${breakpoints.xs}) {
		row-gap: 1rem;
	}
	
`;
export const PeopleWrap = styled.div`
    width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2.4rem
`
export const PeopleItem = styled.div`
	width: calc(100% / 4);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2.4rem;
	padding: 2.4rem;

	@media (max-width: ${breakpoints.xl}) {
		width: calc(100% / 3);
	}
	@media (max-width: ${breakpoints.lg}) {
	
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
export const ItemWrap = styled.button`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;
export const ItemTitle = styled.h2`
	font-size: clamp(1.8rem, 0.388vw + 1.654rem, 2.4rem);
`;

export const PeopleImg = styled.div`
	width: 100%;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	//box-shadow: 0.2rem 0.2rem 0.3rem 0.05rem rgba(85, 90, 105, 0.5);
	box-shadow: rgba(85, 90, 105, 0.25) 0px 1.9rem 3.8rem,
		rgba(85, 90, 105, 0.22) 0px 1.5rem 1.2rem;
	height: 27.2rem;
	@media (max-width: ${breakpoints.lg}) {
		width: 100%;
	}
	
	@media (max-width: ${breakpoints.sm}) {
		box-shadow: none;
		background-size: contain;
		background-position: left;
	}
	
`;
export const ItemBadgeWrap = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 1.2rem;
`
export const ItemBadge = styled.div`
	padding: 0.2rem 0.8rem;
	border: 0.2px solid #555a69;
	border-radius: 0.4rem;
	font-size: 1.2rem;
	line-height: 167%;
	
`;
