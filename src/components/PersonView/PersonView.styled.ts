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
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
export const PersonImgWrap = styled.div`
	flex-shrink: 0;
	width: var(--avatar-size, 30rem);
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
	${fluidTypography({ max: 64, min: 16 })}
	font-weight: normal;
	color: #28282d;
`;
export const PersonEmail = styled.h6``;
export const PositionTitle = styled.h6`
		${fluidTypography({ max: 21, min: 12 })}
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
export const SectionsGroup = styled.div<{$direction?: 'row' | 'column'}>`
	width: 100%;
	display: flex;
	flex-direction: ${({$direction = 'column'}) => $direction};
	align-items: flex-start;
	gap: ${({$direction = 'column'}) =>
		$direction === 'row' ? '4rem' : '2.4rem'};

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
const BULLET_STYLES = ['disc', 'circle', 'square'] as const;
const NUMBER_STYLES = ['decimal', 'lower-alpha', 'lower-roman'] as const;

const listBase = css<{$depth: number}>`
	padding-left: 2.4rem;
	margin: ${({$depth}) => ($depth === 0 ? '0.8rem 0 1.2rem' : '0.4rem 0 0')};
	list-style-position: outside;
`;

export const BulletList = styled.ul<{$depth: number}>`
	${listBase}
	list-style-type: ${({$depth}) =>
		BULLET_STYLES[$depth % BULLET_STYLES.length]};
`;

export const NumberedList = styled.ol<{$depth: number}>`
	${listBase}
	list-style-type: ${({$depth}) =>
		NUMBER_STYLES[$depth % NUMBER_STYLES.length]};
`;

export const ListItem = styled.li`
	line-height: 1.6;
	white-space: pre-line;

	& + & {
		margin-top: 0.4rem;
	}
`;
