import styled, {css} from 'styled-components';
import {fluidTypography} from '../../styles/fluidTypography';
import {breakpoints} from '../../styles/breakpoints';

const sectionAnchor = css`
	scroll-margin-top: calc(var(--header-height, 15rem) + 2rem);
`;

/* место под меню слева внутри каждого раздела */
const sectionInset = css`
	padding-left: calc(15rem + var(--menu-width) + 5rem);
`;

/* фон на всю ширину экрана, центрируется относительно блока */
const fullBleed = (color: string) => css`
	position: relative;
	isolation: isolate;

	&::before {
		content: '';
		position: absolute;
		inset-block: 0;
		left: 50%;
		width: 100vw;
		transform: translateX(-50%);
		z-index: -1;
		background-color: ${color};
	}
`;

export const CapaPage = styled.div<{$visible: boolean}>`
	--slide-base: clamp(28rem, 45vw, 70rem);
	--slide-gap: clamp(1rem, 2.2vw, 3rem);
	--slide-padding: clamp(1.5rem, 5vw, 10rem);
	--accent-width: clamp(0.4rem, 0.6vw, 0.8rem);
	--accent-height: clamp(1.4rem, 2vw, 2.6rem);
	--stripe-width: clamp(2.5rem, 4vw, 11.5rem);
    width: 100%;
	display: flex;
	flex-direction: column;
	color: var(--text);
	z-index: 3;
    padding-top: 5rem;
    &::after {
		content: '';
		position: absolute;
        top: 50%;
		transform: translateY(-50%) skewX(-22.5deg);
		height: calc(var(--slide-base) * 0.6);
		width: var(--stripe-width);
		/* центр полоски на стыке картинки и контента */
		right: calc(var(--slide-base) - 28rem);
		background: #d7ff23;
        z-index: -1;
		clip-path: inset(0 0 100% 0);
		transition: clip-path 0.8s ease-out 0.2s;

		${({$visible}) =>
			$visible &&
			css`
				clip-path: inset(0 0 0 0);
			`}
`;

export const CapaInfo = styled.section`
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	
`;

export const CapaTitleBlock = styled.div`
	display: flex;
	align-content: flex-start;
	gap: 22rem;
	margin-bottom: 2rem;
`;

export const CapaBack = styled.button`
	display: flex;
	align-self: flex-start;
	align-items: center;
	position: relative;
	gap: 2rem;
	padding: 0;
	background: none;
	border: none;
	text-transform: uppercase;
	cursor: pointer;
	${fluidTypography({max: 20, min: 12})};
	font-weight: 300;
	color: var(--text);
	transition: color 0.3s ease;

	&:hover,
	&:focus-visible {
		color: #a0b9be;
	}
`;

export const CapaTitle = styled.h1`
	margin: 0;
	${fluidTypography({max: 48, min: 32})};
	font-weight: 400;
	color: #28282d;
`;

export const CapaContentBlock = styled.div`
	--menu-width: 24rem; /* подгоните под самый длинный пункт меню */
	display: grid;
`;

export const CapaMenu = styled.ul`
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

export const CapaMenuItems = styled.li<{$active?: boolean}>`
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
`;

export const CapaMenuButton = styled.button`
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

export const CapaSections = styled.div`
	grid-area: 1 / 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
`;

export const CapaTextBlock = styled.div`
	${sectionAnchor}
	${sectionInset}
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-bottom: 6rem;
`;

export const CapaText = styled.p`
	margin: 0;
	max-width: 60ch;
	${fluidTypography({max: 22, min: 14})};
`;

export const CapaList = styled.ul`
	margin: 0;
	padding-left: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	max-width: 60ch;
	${fluidTypography({max: 20, min: 14})};
`;

export const CapaKeyBlock = styled.div`
	${sectionAnchor}
	${sectionInset}
	${fullBleed('#fff')}
	min-height: 40rem;
	padding-block: 4rem;
	color: #111; /* тёмный текст на белом фоне */
`;

export const CapaServiceBlock = styled.div`
	${sectionAnchor}
	${sectionInset}
	${fullBleed('#f4f6fa')}
	min-height: 40rem;
	padding-block: 4rem;
	margin-bottom: -3rem; /* перекрывает row-gap сетки, фон доходит до футера */
`;

export const CapaImage = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: -1;
	width: var(--slide-base);
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
		object-fit: cover;
		object-position: center right;
	}

	@media (max-width: ${breakpoints.lg}) {
		position: relative;
		width: 100%;
		height: calc(var(--slide-base) * 0.5);
		z-index: 0;
		margin-top: var(--slide-gap);

		-webkit-mask: none;
		mask: none;

		img {
			object-position: center;
			border-radius: var(--slide-gap);
		}
	}
	@media (max-width: ${breakpoints.lg}) {
		img {
			display: none;
		}
	}
`;
