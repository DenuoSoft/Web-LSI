import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {breakpoints} from '../../styles/breakpoints';
import { fluidTypography } from '../../styles/fluidTypography';

export const HeaderBlock = styled.header<{ $isHomePage?: boolean }>`
	grid-area: header;
	position: sticky;
	width: 100%;
	display: flex;
	justify-content: center;
	z-index: 99;
`;

export const HeaderContainer = styled.div<{ $isHomePage?: boolean }>`
	max-width: 140rem;
	width: 100%;
	height: 100%;
	display: flex;
	//gap: 3.2rem;
	justify-content: space-between;
	padding-bottom: 2rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	
	@media (max-width: ${breakpoints.md}) {
		justify-content: space-between;
		width: 100%;
	}
`;

export const ContactLink = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
color: #64358c;
gap: 1rem;
${fluidTypography({max: 20, min: 14})}
padding-right: 2rem;

@media (max-width: ${breakpoints.md}) {
		display: none;
	}
`;
export const HeaderNav = styled.div<{$isOpen: boolean}>`
	display: flex;
	//justify-content: flex-start;
	align-items: flex-end;
	gap: 6rem;
	margin-right: 0;
	@media (max-width: ${breakpoints.md}) {
		position: fixed;
		top: 0;
		left: ${(props) => (props.$isOpen ? '0' : '100%')};
		width: 100%;
		height: 40vh;
		background-color: rgba(85, 90, 105, 0.9);
		color: #fff;
		flex-direction: column;
		padding: 6rem 2rem 2rem;
		transition: left 0.3s ease;
		gap: 0;
		z-index: 98;
	}
`;
export const HeaderLink = styled(NavLink)<{ $isHomePage?: boolean }>`
     display: flex;	
	
//position: relative;
	text-decoration: none;
	//padding: 1rem;
	//color: #000f;
	color:${props => props.$isHomePage ? '#c8d2e6' : '#555a69'};
	//width: 10rem;
	border: none;
	outline: none;
	${fluidTypography({max: 20, min: 14})}

	&.active {
		font-weight: bold;
	}
	@media (max-width: ${breakpoints.md}) {
		color: #fff;
	}
`;
export const HeaderContact = styled(NavLink)`
	height: 100%;
	width: auto;
	flex-shrink: 0;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
	//${fluidTypography({max: 14, min: 10})}
	@media (max-width: ${breakpoints.lg}) {
		display: none;
	}
	@media (max-width: ${breakpoints.md}) {
		display: block;
	}
	@media (max-width: ${breakpoints.xs}) {
		display: none;
	}
`;
export const HeaderLogo = styled.div`
    height: 100%;
	width: auto;
	display: block;
	
	@media (max-width: ${breakpoints.md}) {
		height: 80%;
	}
`;
export const MobileMenuButton = styled.button<{$isOpen: boolean}>`
	display: none;
	background: none;
	border: none;
	color: ${(props) => (props.$isOpen ? '#fff' : '#000')};
	font-size: 2rem;
	cursor: pointer;
	z-index: 100;

	@media (max-width: ${breakpoints.md}) {
		display: block;
	}
`;
export const MobileOverlay = styled.div<{$isOpen: boolean}>`
	display: none;

	@media (max-width: ${breakpoints.md}) {
		display: ${(props) => (props.$isOpen ? 'block' : 'none')};
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 97;
		color: #fff;
	}
`;

