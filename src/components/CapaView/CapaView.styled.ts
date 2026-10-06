import styled from 'styled-components';
import {fluidTypography} from '../../styles/fluidTypography';
import {breakpoints} from '../../styles/breakpoints';

export const CapaPage = styled.main`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	gap: 6rem;
	padding: 8rem 5vw 4rem;
	color: #c8d2e6;
    z-index: 3;
	@media (max-width: ${breakpoints.md}) {
		flex-direction: column-reverse;
		gap: 3rem;
	}
`;

export const CapaInfo = styled.section`
	flex: 1;
	min-width: 0;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
`;

export const CapaBack = styled.button`
	align-self: flex-start;
	padding: 0;
	background: none;
	border: none;
	color: #c8d2e6;
	cursor: pointer;
	${fluidTypography({max: 18, min: 12})};
	transition: color 0.3s ease;

	&:hover,
	&:focus-visible {
		color: #d7ff23;
	}
`;

export const CapaTitle = styled.h1`
	margin: 0;
	color: #d7ff23;
	${fluidTypography({max: 64, min: 32})};
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

export const CapaImage = styled.div`
	flex: 0 0 40%;
	min-height: 30rem;
	overflow: hidden;
	/* тот же скос, что у картинки в Tabs */
	clip-path: polygon(22% 0, 100% 0, 78% 100%, 0 100%);

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: ${breakpoints.md}) {
		flex-basis: auto;
		min-height: 20rem;
	}
`;