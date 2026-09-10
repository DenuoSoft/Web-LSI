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
	z-index: 1;
	
`;
export const PersonWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	gap: 20rem;
	color: #c8d2e6;
	animation: ${fadeInX} 0.5s ease-in;
	@media (max-width: ${breakpoints.lg}) {
		flex-direction: column;
		gap: 2rem;
	}
`;
export const PersonItem = styled.div`
	display: flex;
	flex-direction: column; 
	gap: 2rem;
`;
export const PersonImg = styled.div`
 	width: 100%;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	height: 35%;
	border-radius: 100%;
	/* box-shadow: rgba(85, 90, 105, 0.25) 0px 1.9rem 3.8rem,
		rgba(85, 90, 105, 0.22) 0px 1.5rem 1.2rem; */
	@media (max-width: ${breakpoints.lg}) {
		width: 25rem;
		height: 25rem;
	}
	@media (max-width: ${breakpoints.md}) {
		width: 20rem;
		height: 20rem;
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
export const ItemTitle = styled.h1`
	display: flex;
`;
export const PersonEmail = styled.h6`
`
export const PositionTitle = styled.h6`

`

export const Description = styled.div`
	//text-align: justify;
	//padding: 2.4rem 0;
	//border-top: 0.5px solid #8237FF;
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
	color: #c8d2e6;
	font-size: clamp(1.4rem, 0.388vw + 1.654rem, 1.8rem);
	&:hover {
	color: #d7ff23;
	}
`;
export const ContentSection = styled.div`
	margin-top: 3rem;
	border-top: 2px solid #f0f0f0;
	padding-top: 2rem;
`;

export const ContentItem = styled.div<{isHeading?: boolean}>`
	margin-bottom: ${props => props.isHeading ? '1.5rem' : '1rem'};
	padding: ${props => props.isHeading ? '0' : '0.5rem 0'};
	
	${props => props.isHeading && `
		border-bottom: 2px solid #f5f5f5;
		padding-bottom: 0.5rem;
		margin-top: 2rem;
		
		&:first-child {
			margin-top: 0;
		}
	`}
	
	
`;

export const FormattedText = styled.div`
	line-height: 1.8;
	color: #333;
`;

export const FormattingSpan = styled.span`
	display: inline;
`;

export const StyledList = styled.ul<{type: 'numbered' | 'bullet'}>`
	list-style-type: ${props => props.type === 'numbered' ? 'decimal' : 'disc'};
	padding-left: 2rem;
	margin: 0.5rem 0;
`;

export const ListItem = styled.li<{level: number}>`
	margin-left: ${props => props.level * 1.5}rem;
	padding: 0.25rem 0;
	line-height: 1.6;
	color: #333;
`;

export const ItemBadgeWrap = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 1.2rem;
	color: #c8d2e6;
	
	@media (max-width: ${breakpoints.sm}) {
		justify-content: center;
	}
`;
export const ItemBadge = styled.div`
	padding: 0.2rem 0.8rem;
	border: 0.2px solid #c8d2e6;
	border-radius: 0.4rem;
	font-size: 1.2rem;
	line-height: 167%;
`;
