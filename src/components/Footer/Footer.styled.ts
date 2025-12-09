import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {breakpoints} from '../../styles/breakpoints';
import { fluidTypography } from '../../styles/fluidTypography';

export const FooterBlock = styled.footer`
	grid-area: footer;
	display: flex;
	justify-content: center;
	background-color: #555a69;
	color: #c8c8c8;
	
`;
export const FooterWrap = styled.div`
	max-width: 140rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	padding: 2rem 0;
`;
export const ContentBlock = styled.div`
	display: flex;
	justify-content: space-between;

`;
export const ItemsBlock = styled.div`
	width: calc(100% / 3);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0 2rem;
	border-left: 1px solid #c8c8c8;

	&:nth-child(3n) {
		border-right: 1px solid #c8c8c8;
	}
	@media (max-width: ${breakpoints.xl}) {
		&:first-child {
			border-left: none;
		}
		&:nth-child(3n) {
			border-right: none;
		}
	}
	@media (max-width: ${breakpoints.md}) {
		flex-direction: row;
		gap: 1.2rem;
		justify-content: center;
		align-items: center;
		border-left: none;
		width: 100%;
		&:nth-child(-n + 2) {
			display: none;
		}
	}
	@media (max-width: ${breakpoints.xs}) {
		padding: 0 1rem;
		gap: 0.8rem;
	}
`;
export const ItemsTitle = styled.h2`
	font-weight: 300;
	${fluidTypography({max: 18, min: 14})}
    
`;
export const ItemsText = styled.p`
	${fluidTypography({max: 16, min: 12})}
    
`;
export const RightsBlock = styled.div`
	margin-top: 3.2rem;
	width: 100%;
	display: flex;
	justify-content: center;
	${fluidTypography({max: 14, min: 12})}
    color: #c8c8c8;
     @media (max-width: ${breakpoints.md}) {
				margin-top: 1.2rem;
	}
`;
export const LinksBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
	@media (max-width: ${breakpoints.md}) {
		flex-direction: row;
		align-items: center;
		gap: 2rem;
	}
	@media (max-width: ${breakpoints.xs}) {
		gap: 1rem;
	}
`;
export const FooterLink = styled(NavLink)`
	text-decoration: none;
	color: #c8c8c8;
	border: none;
	outline: none;
	cursor: pointer;
	${fluidTypography({max: 16, min: 12})}
	font-weight: 300;
   
`;
