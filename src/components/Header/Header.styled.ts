import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {breakpoints} from '../../styles/breakpoints';
import {fluidTypography} from '../../styles/fluidTypography';

export const HeaderBlock = styled.header`
	grid-area: header;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	background-color: #fff;
	border-bottom: 1px solid #000;
	padding: 1rem 0;
	z-index: 99;
`;
export const HeaderContainer = styled.div`
	max-width: 140rem;
	width: 100%;
	display: flex;
	gap: 3.2rem;
	align-items: center;

	@media (max-width: ${breakpoints.md}) {
		justify-content: space-between;
		width: 100%;
	}
`;
export const HeaderLogo = styled.img`
	width: 15rem;
	object-fit: contain;
`;
export const HeaderNav = styled.div<{$isOpen: boolean}>`
	display: flex;
	justify-content: flex-end;
	flex: 1;
	gap: 1.6rem;
	margin-right: 0;
	justify-content: flex-end;
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
export const HeaderLink = styled(NavLink)`
	position: relative;
	text-decoration: none;
	padding: 1rem;
	color: #000f;
	width: 10rem;
	text-align: right;
	border: none;
	outline: none;
	${fluidTypography({max: 16, min: 14})}

	&.active {
		font-weight: bold;
	}
	@media (max-width: ${breakpoints.md}) {
		color: #fff;
	}
`;
export const HeaderContact = styled.div`
	margin-right: 0;
	${fluidTypography({ max: 14, min: 10 })}
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
