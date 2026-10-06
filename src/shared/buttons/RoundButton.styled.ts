import styled, {css} from 'styled-components';
import {fluidTypography} from '../../styles/fluidTypography';
import {breakpoints} from '../../styles/breakpoints';
import type {ButtonVariant} from '../../models/button-model';

// Общий "ховер-вид": белый фон + жёлтая полоса, заходящая наполовину
const hoverLook = css`
	border-color: transparent;
	background: #fff;

	&::before {
		transform: rotate(20deg) translateX(50%);
	}
`;

export const ButtonBlock = styled.button<{$variant: ButtonVariant}>`
	position: absolute;
	bottom: 16rem;
	right: 10rem;
	z-index: 5;
	width: 16.1rem;
	height: 16.1rem;
	border-radius: 100%;
	padding: 0.5rem;
	background: transparent;
	font-weight: 400;
	${fluidTypography({max: 18, min: 12})}
	line-height: 1.7rem;
	text-transform: uppercase;
	border: 1px solid rgba(85, 90, 105, 0.5);
	transform: skew(22.5deg) translateZ(0);
	overflow: hidden;
	cursor: pointer;
	transition: all 0.3s ease;
	@media (max-width: ${breakpoints.xxl}) {
		right: 5rem;
	}

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: #d7ff23;
		transform: rotate(20deg) translateX(100%);
		transition: transform 0.3s ease;
	}

	${({$variant}) =>
		$variant === 'main' &&
	css`
		   
			&:hover {
				${hoverLook}
			}
		`}

	${({$variant}) =>
		$variant === 'capa' &&
	css`    
	        transform: translateZ(0);
			bottom: 15rem;
			left: 9rem;	
			${hoverLook}
			

  		&:hover {
				background: #d7ff23;
				&::before {
					transform: none;
				}
			}
		`}
`;

export const ButtonText = styled.span`
	position: relative;
	z-index: 1;
`;