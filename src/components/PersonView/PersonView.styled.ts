import styled, {css} from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import {fadeInX} from '../../styles/animation';
import {fluidTypography} from '../../styles/fluidTypography';
import {ItemIcon} from '../../styles/shared';

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
	color: var(--text);
	animation: ${fadeInX} 0.5s ease-in;
	@media (max-width: ${breakpoints.lg}) {
		flex-direction: column;
		gap: 2rem;
	}
`;
export const PersonItem = styled.div`
	position: sticky;
	top: 13rem; 
	align-self: flex-start; 
	flex-shrink: 0;
	width: 40rem; /* фиксированная ширина, чтобы InfoBlock не "прыгал" при сжатии аватара */
	display: flex;
	flex-direction: column;
	gap: 2rem;
	z-index: 2;
	//background: var(--background, #fff); /* на мобилке блок перекрывает контент */

	@media (max-width: ${breakpoints.lg}) {
		width: 100%;
	}
`;
export const PersonHead = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	gap: 1.6rem;
`;

export const PersonHeadText = styled.div<{$visible?: boolean}>`
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 5rem;
	transition:
		opacity 0.3s ease,
		visibility 0.3s ease;

	${({$visible}) =>
		$visible
			? css`
					opacity: 1;
					visibility: visible;
				`
			: css`
					/* вне потока, чтобы не занимать место рядом с большим аватаром */
					position: absolute;
					left: 0;
					opacity: 0;
					visibility: hidden;
					pointer-events: none;
				`}
`;
export const PersonImgWrap = styled.div<{
	$compact?: boolean;
	
}>`
	--avatar-size: 30rem;
	flex-shrink: 0;
	/* --p (0..1) выставляет useScrollProgress на PersonItem */
	width: calc(var(--avatar-size) + (120px - var(--avatar-size)) * var(--p, 0));
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	overflow: hidden;

	@media (max-width: ${breakpoints.lg}) {
		--avatar-size: 25rem;
	}
	@media (max-width: ${breakpoints.md}) {
		--avatar-size: 20rem;
	}
`;
export const PersonImg = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	/* @media (max-width: ${breakpoints.lg}) {
		width: 25rem;
		height: 25rem;
	}
	@media (max-width: ${breakpoints.md}) {
		width: 20rem;
		height: 20rem;
	} */
`;
export const PersonTitle = styled.h6`
	${fluidTypography({max: 27, min: 16})}
	overflow-wrap: anywhere;
`;
export const PersonEmail = styled.h6`
	${fluidTypography({max: 21, min: 12})}
	font-weight: normal;
`;
export const PersonEmailUnder = styled(PersonEmail)<{$hidden?: boolean}>`
	opacity: ${({$hidden}) => ($hidden ? 0 : 1)};
	visibility: ${({$hidden}) => ($hidden ? 'hidden' : 'visible')};
	transition: opacity 0.25s ease, visibility 0.25s ease;
    color: var(--text);
	`;
export const PersonPosition = styled.h6`
	${fluidTypography({max: 21, min: 12})}
	font-weight: normal;
	overflow-wrap: anywhere;
`;
export const InfoBlock = styled.div`
	flex: 1;
	min-width: 0;
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
	${fluidTypography({max: 64, min: 16})}
	font-weight: normal;
	color: #28282d;
`;

export const PositionTitle = styled.h6`
	${fluidTypography({max: 21, min: 12})}
	font-weight: normal;
`;

export const Description = styled.div`
	//text-align: justify;
	//padding: 2.4rem 0;
	//border-top: 0.5px solid #8237FF;
	${fluidTypography({max: 27, min: 16})}
	@media (max-width: ${breakpoints.md}) {
		font-size: 1.6rem;
	}
`;
export const NavBack = styled.button`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	cursor: pointer;
	color: var(--text);
	${ItemIcon} {
		color: inherit;
	}

	svg path {
		fill: currentColor;
		transition: fill 0.2s ease;
	}

	&:hover {
		color: #a0b9be;
	}

	&:hover ${ItemIcon} {
		color: #a0b9be;
		border-color: #a0b9be;
	}

	&:hover svg path {
		fill: #a0b9be;
	}
`;
export const NavBackText = styled.span`
	color: inherit;
	font-size: clamp(1.4rem, 0.388vw + 1.654rem, 1.8rem);
`;

export const ItemBadgeWrap = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 1.2rem;
	color: var(--text);

	@media (max-width: ${breakpoints.sm}) {
		justify-content: center;
	}
`;
export const ItemBadge = styled.div`
	padding: 0.2rem 0.8rem;
	border: 0.2px solid var(--text);
	border-radius: 0.4rem;
	font-size: 1.2rem;
	line-height: 167%;
`;

export const DocSection = styled.section`
	width: 100%;
	${fluidTypography({max: 27, min: 16})}
	@media (max-width: ${breakpoints.md}) {
		font-size: 1.6rem;
	}
`;

const headingBase = css`
	margin: 2.4rem 0 0.8rem;
	font-weight: 600;
	line-height: 1.25;

	&:first-child {
		margin-top: 0;
	}
`;
export const SectionsGroup = styled.div<{
	$direction?: 'row' | 'column';
	$filled?: boolean;
	$extendBottom?: boolean;
}>`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: ${({$direction = 'column'}) => $direction};
	align-items: flex-start;
	gap: ${({$direction = 'column'}) =>
		$direction === 'row' ? '4rem' : '2.4rem'};
	padding-top: 3rem;
	&::before {
		content: '';
		position: absolute;
		inset: 0 -100vmax ${({$extendBottom}) => ($extendBottom ? '-3rem' : '0')};
		clip-path: inset(0 -100vmax);
		z-index: -1;
		background-color: #fff;
		pointer-events: none;
		opacity: ${({$filled}) => ($filled ? 1 : 0)};
		transition: opacity 0.3s ease;
	}
	/* равные колонки только в ряду */
	${({$direction}) =>
		$direction === 'row' &&
		css`
			& > * {
				min-width: 0;
			}
			& > :first-child {
				flex: 3 1 0; /* основная секция: 3 части */
			}

			& > :last-child {
				flex: 1 1 0; /* колонка карточек: 2 части */
			}
		`}

	@media (max-width: ${breakpoints.lg}) {
		flex-direction: column;
		gap: 2.4rem;

		& > * {
			flex: none;
			width: 100%;
		}
	}
`;

export const MembershipGroup = styled(SectionsGroup)`
	padding: 3rem 0;

	&::after {
		content: '';
		position: absolute;
		/* сверху перекрываем gap InfoBlock (2.4rem), снизу row-gap LayoutBlock (3rem) */
		inset: -2.4rem -100vmax -3rem;
		z-index: -1;
		background-color: #f4f6fa;
		pointer-events: none;
	}
`;
export const DocH1 = styled.h1`
	${headingBase}
	font-size: 1.8em;
`;
export const DocH2 = styled.h2`
	${headingBase}
	font-size: 1.5em;
`;
export const DocH3 = styled.h3`
	${headingBase}
	font-size: 1.3em;
`;
export const DocH4 = styled.h4`
	${headingBase}
	font-size: 1.15em;
`;
export const DocH5 = styled.h5`
	${headingBase}
	font-size: 1em;
`;
export const DocH6 = styled.h6`
	${headingBase}
	font-size: 0.9em;
`;

export const Paragraph = styled.p`
	margin: 0 0 0.8rem;
	line-height: 1.6;
	white-space: pre-line; /* сохраняет переносы строк (Shift+Enter) из Word */
`;

// Inline-форматирование фрагмента текста
export const Run = styled.span<{
	$bold?: boolean;
	$italic?: boolean;
	$underline?: boolean;
}>`
	${({$bold}) =>
		$bold &&
		css`
			font-weight: 700;
		`}
	${({$italic}) =>
		$italic &&
		css`
			font-style: italic;
		`}
	${({$underline}) =>
		$underline &&
		css`
			text-decoration: underline;
		`}
`;

// Списки. Маркеры и нумерация меняются с глубиной вложенности
const NUMBER_STYLES = ['decimal', 'lower-alpha', 'lower-roman'] as const;

const listBase = css<{$depth: number}>`
	padding-left: 2.4rem;
	margin: ${({$depth}) => ($depth === 0 ? '0.8rem 0 1.2rem' : '0.4rem 0 0')};
	list-style-position: outside;
`;
export const ListItem = styled.li`
	position: relative; /* точка отсчёта для ::before */
	line-height: 1.6;
	white-space: pre-line;

	& + & {
		margin-top: 0.4rem;
	}
`;
export const BulletList = styled.ul<{$depth: number}>`
	${listBase}
	${listBase}
	list-style: none; /* стандартный маркер отключаем */

	& > ${ListItem}::before {
		content: '';
		position: absolute;
		top: 10px;
		left: -26.5px;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background-color: rgb(200, 210, 230);
	}
	& > ${ListItem}:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 15px;
		left: -19.8px;
		width: 1px;
		height: 100%;
		background-color: rgb(200, 210, 230);
	}	
`;

export const NumberedList = styled.ol<{$depth: number}>`
	${listBase}
	list-style-type: ${({$depth}) =>
		NUMBER_STYLES[$depth % NUMBER_STYLES.length]};
`;


