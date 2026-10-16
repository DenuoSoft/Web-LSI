import styled, {css} from 'styled-components';
import { fluidTypography } from '../../styles/fluidTypography';


export const MenuList = styled.ul`
	grid-area: 1 / 1;
	justify-self: start;
	align-self: start;
	margin: 0 0 0 15rem;
	padding: 0;
	list-style: none;
	width: var(--menu-width);
	position: sticky;
	top: 45vh;
	transform: translateY(-50%);
	z-index: 10;

	@media (max-height: 40rem) {
		top: calc(var(--header-height, 10rem) + 2rem);
		transform: none;
	}
`;

/* export const MenuItem = styled.li<{$active?: boolean}>`
	position: relative;
	padding-bottom: 2rem;
	${fluidTypography({max: 20, min: 16})}
	color: var(--text);

	${({$active}) =>
		$active &&
		css`
			font-weight: bold;

			&::before {
				content: '';
				position: absolute;
				left: calc(var(--slide-gap) * -1);
				top: calc(var(--accent-height) - 1rem);
				transform: translateY(-50%) skew(-22deg);
				width: var(--accent-width);
				height: var(--accent-height);
				background: #d7ff23;
			}
		`}
`; */

export const MenuItem = styled.li<{$active?: boolean}>`
	position: relative;
	padding-bottom: 2rem;
	${fluidTypography({max: 20, min: 16})}
	color: var(--text);

	${({$active}) =>
		$active &&
		css`
			font-weight: bold;

			&::before {
				content: '';
				position: absolute;
				left: calc(var(--slide-gap, 2rem) * -1);
				top: calc(var(--accent-height, 2.4rem) - 1rem);
				transform: translateY(-50%) skew(-22deg);
				width: var(--accent-width, 0.8rem);
				height: var(--accent-height, 2.4rem);
				background: #d7ff23;
			}
		`}
`;
export const MenuButton = styled.button`
	padding: 0;
	background: none;
	border: none;
	font: inherit;
	color: inherit;
	text-align: left;
	cursor: pointer;
	transition: color 0.3s ease;

	&:hover,
	&:focus-visible {
		color: #a0b9be;
	}
`;