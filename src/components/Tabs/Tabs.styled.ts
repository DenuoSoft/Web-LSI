import styled, {css} from 'styled-components';
import {fluidTypography} from '../../styles/fluidTypography';
import {breakpoints} from '../../styles/breakpoints';
import type {TabsVariant} from '../../models/tabs';

export const TabsWrap = styled.div<{$variant: TabsVariant}>`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 10rem;
	z-index: 3;

	${({$variant}) =>
		$variant === 'services' &&
		css`
			position: relative;
			align-items: center;
			justify-content: center;
			gap: 4rem;
			padding: 0 10rem;
			@media (max-width: ${breakpoints.xl}) {
				gap: 2rem;
			}
		`}

	${({$variant}) =>
		$variant === 'insights' &&
		css`
			flex-direction: column;
			justify-content: flex-start;
			align-items: stretch;
			gap: 6rem;
		`}
`;

export const TabsBlock = styled.div<{
	$variant: TabsVariant;
	$side?: 'left' | 'right';
}>`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	z-index: 2;

	@media (max-width: ${breakpoints.sm}) {
		width: 18rem;
	}

	${({$variant, $side}) =>
		$variant === 'services' &&
		css`
			flex: 1;
			width: auto;
			min-width: 0;
			align-items: ${$side === 'right' ? 'flex-end' : 'flex-start'};
		`}

	${({$variant}) =>
		$variant === 'insights' &&
		css`
			width: 100%;
			flex-direction: row;
			justify-content: flex-start;
			gap: 3rem;

			@media (max-width: ${breakpoints.sm}) {
				flex-wrap: wrap;
				gap: 1.5rem;
			}
		`}
`;

export const TabsItem = styled.div<{
	$isActive: boolean;
	$variant: TabsVariant;
	$side?: 'left' | 'right';
}>`
	display: flex;
	align-items: center;
	gap: 10px;
	padding-bottom: 0.5rem;
	${fluidTypography({max: 24, min: 12})};
	cursor: pointer;
	color: ${({$isActive}) => ($isActive ? '#d7ff23' : '#c8d2e6')};
	font-weight: ${({$isActive}) => ($isActive ? 'bold' : 'normal')};
	transition: color 0.3s ease;
	position: relative;
	width: fit-content;

	.tab-text {
		display: inline-block;
		white-space: nowrap;
		position: relative;
		z-index: 1;
	}

	&::after {
		content: '';
		display: inline-block;
		max-width: 100%;
		height: 1px;
		z-index: -1;
		background: #c8d2e6;
		transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		flex-shrink: 0;
		opacity: ${({$isActive}) => ($isActive ? 1 : 0)};
		transform: scaleX(${({$isActive}) => ($isActive ? 1 : 0)});
		transform-origin: left;

		@media (max-width: ${breakpoints.xxl}) {
			width: 35rem;
		}
		@media (max-width: ${breakpoints.md}) {
			display: none;
		}
	}

	&:hover {
		color: #d7ff23;

		&::after {
			width: 65rem;
			opacity: 1;
			transform: scaleX(1);

			@media (max-width: ${breakpoints.xxl}) {
				width: 55rem;
			}
		}
	}

	${({$variant}) =>
		$variant === 'insights' &&
		css`
			&::after {
				display: none;
			}
			&:hover::after {
				display: none;
			}
		`}

	/* services: линия тянется от текста в сторону картинки */
	${({$variant, $side}) =>
		$variant === 'services' &&
		css`
			width: 100%;
			flex-direction: ${$side === 'right' ? 'row-reverse' : 'row'};

			&::after {
				flex: 1;
				width: auto;
				transform-origin: ${$side === 'right' ? 'right' : 'left'};
			}
			&:hover::after {
				width: auto;
			}
		`}
`;

/* Обёртка для картинки и кнопки в центре (только services) */
export const TabsCenter = styled.div`
	position: relative;
	flex-shrink: 0;
	display: flex;
	justify-content: center;
	z-index: 5;

	@media (max-width: ${breakpoints.md}) {
		display: none;
	}
`;

/* Кнопка поверх нижней серой части картинки */
export const TabsCta = styled.div`
	position: absolute;
	left: 50%;
	bottom: 2rem;
	transform: translateX(-50%);
	z-index: 6;
`;

export const TabsAkkut = styled.div<{
	$variant: TabsVariant;
	$visible?: boolean;
}>`
	display: block;
	position: relative;
	opacity: 1;
	flex-shrink: 0;
	overflow: hidden;
	z-index: 5;

	${({$variant}) =>
		$variant === 'services' &&
		css`
			--akkut-h: 59.38272vh;
			width: 35rem;
			height: var(--akkut-h);
			transform: skew(-22.5deg) translate3d(0, 0.59259vh, 0);
			-webkit-transform: skew(-22.5deg) translate3d(0, 0.59259vh, 0);

			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 10rem;
				bottom: 0;
				background-color: #c8d2e6;
				z-index: 5;
			}

			@media (max-width: ${breakpoints.xl}) {
				width: 27rem;
			}
			@media (max-width: ${breakpoints.lg}) {
				width: 20rem;
			}
			@media (max-width: ${breakpoints.md}) {
				display: none;
			}
		`}

	${({$variant, $visible}) =>
		$variant === 'insights' &&
		css`
			position: absolute;
			background-color: #d7ff23;
			top: 18rem;
			right: 39rem;
			bottom: 25rem;
			width: 11.5rem;
			transform: skew(-22.5deg) translate3d(0, 2vh, 0);
			-webkit-transform: skew(-22.5deg) translate3d(0, 2vh, 0);
			/* начальное состояние — обрезано слева */
			clip-path: inset(0 100% 0 0);
			-webkit-clip-path: inset(0 100% 0 0);
			transition:
				clip-path 0.8s ease-out 0.2s,
				-webkit-clip-path 0.8s ease-out 0.2s;

			${$visible &&
			css`
				clip-path: inset(0 0 0 0);
				-webkit-clip-path: inset(0 0 0 0);
			`}
		`}
`;

export const TabsAkkutImg = styled.img`
	position: absolute;
	top: 0;
	left: -8rem;
	width: calc(100% + 0.42 * var(--akkut-h));
	height: 100%;
	object-fit: cover;
	object-position: center center;
	display: block;
	z-index: 5;
	transform: skew(22.5deg);
	transform-origin: center;

	
`;

export const TabContent = styled.div<{$variant: TabsVariant}>`
	display: flex;
	position: relative;

	${({$variant}) =>
		$variant === 'services' &&
		css`
			display: none;
		`}

	${({$variant}) =>
		$variant === 'insights' &&
		css`
			width: 80%;
		`}
`;

export const TabsImg = styled.div<{$variant: TabsVariant}>`
	display: none;

	${({$variant}) =>
		$variant === 'insights' &&
		css`
			display: block;
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: -1;
			width: 70rem;
			height: 100%;
			-webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='452' height='733' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M452 733V0H305.5L0 733h452z' fill='%23555A69'/%3E%3C/svg%3E")
				center left/cover;
			mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='452' height='733' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M452 733V0H305.5L0 733h452z' fill='%23555A69'/%3E%3C/svg%3E")
				center left/cover;
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;

			img {
				display: block;
				width: 100%;
				height: 100%;
				-o-object-fit: cover;
				object-fit: cover;
				-o-object-position: center right;
				object-position: center right;
			}
		`}
`;
