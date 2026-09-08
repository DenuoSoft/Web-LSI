import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {breakpoints} from '../../styles/breakpoints';
import { fluidTypography } from '../../styles/fluidTypography';

/* export const HeaderBlock = styled.header<{ $isHomePage?: boolean }>`
	grid-area: header;
	position: fixed;
	width: 100%;
	height: 10rem;
	//background: ${props => props.$isHomePage ? 'transparent' : '#555a69'};
	display: flex;
	justify-content: center;
	align-items: flex-end;
	z-index: 5;
	padding: 0 3rem;
`; */
export const HeaderBlock = styled.header<{ 
	$isScrolled?: boolean 
}>`
	grid-area: header;
	position: fixed;
	width: 100%;
	height: 10rem;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	z-index: 5;
	padding: 0 3rem;
	
	/* Всегда прозрачный фон */
	background: transparent;
	
	/* Плавный переход для фона и тени */
	transition: background-color 0.3s ease, box-shadow 0.3s ease;
	
	/* Фон появляется при прокрутке */
	${props => props.$isScrolled && `
		background-color: rgba(85, 90, 105, 0.92);
		backdrop-filter: blur(8px);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
	`}
`;
export const HeaderContainer = styled.div<{ $isHomePage?: boolean; $isScrolled?: boolean; }>`
	max-width: 180rem;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	gap: 8rem;
	padding-bottom: 3rem;
	border-bottom: 1px solid ${props => props.$isHomePage ? '#555a69' : '#c8d2e6'};
	//z-index: 2;
	@media (max-width: ${breakpoints.md}) {
		justify-content: space-between;
		width: 100%;
	}
`;

export const HeaderNav = styled.div<{$isOpen: boolean}>`
	display: flex;
	justify-content: flex-start;
	gap: 6rem;

	@media (max-width: ${breakpoints.md}) {
		position: fixed;
		top: 0;
		left: ${(props) => (props.$isOpen ? '0' : '100%')};
		width: 100%;
		height: 15vh;
		background-color: rgba(85, 90, 105, 0.9);
		color: #c8d2e6;
		align-items: flex-start;
		padding: 6rem 2rem 2rem;
		transition: left 0.3s ease;
		gap: 3rem;
		z-index: 98;
	}
`;

export const HeaderLink = styled(NavLink)<{ $isHomePage?: boolean; $isActive?: boolean }>`
    display: flex;
	text-decoration: none;
	color: ${props => props.$isHomePage ? '#28282d' : '#c8d2e6'};
	border: none;
	//border-bottom: 2px solid ${props => props.$isActive ? '#c8d2e6' : 'transparent'}; 
	outline: none;
	margin: 0;
	line-height: 1;
	${fluidTypography({max: 20, min: 14})}
    position: relative;
	&::after {
		content: '';
		position: absolute;
		bottom: -3rem; /* перекрываем border Container */
		left: 0;
		width: 100%;
		height: 0.5rem;
		background-color: ${props => props.$isActive ? '#c8d2e6' : 'transparent'};
		transition: background-color 0.3s ease;
	}

	&.active {
		font-weight: bold;
	}
	
	@media (max-width: ${breakpoints.lg}) {
		color: #555a69;
	}	
	@media (max-width: ${breakpoints.md}) {
		color: #c8d2e6;
	}
`;

export const HeaderContact = styled(NavLink)`
	height: 100%;
	width: auto;
	flex-shrink: 0;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
	
	@media (max-width: ${breakpoints.xs}) {
		display: none;
	}
`;

export const HeaderLogo = styled.div`
    height: 100%;
	width: auto;
	display: flex;
	align-items: flex-end;
	@media (max-width: ${breakpoints.lg}) {
		height: 90%;
	}
	@media (max-width: ${breakpoints.md}) {
		height: 80%;
	}	
`;

export const MobileMenuButton = styled.button<{$isOpen: boolean}>`
	display: none;
	background: none;
	border: none;
	color: ${(props) => (props.$isOpen ? '#c8d2e6' : '#000')};
	font-size: 3.2rem;
	cursor: pointer;
	z-index: 100;

	@media (max-width: ${breakpoints.md}) {
		display: block;
		font-size: 2.2rem;
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