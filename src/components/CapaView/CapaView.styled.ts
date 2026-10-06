import styled, { css } from "styled-components";

export const CapaBlock = styled.div<{ $visible: boolean }>`
--slide-base: clamp(28rem, 45vw, 70rem);
	--slide-gap: clamp(1rem, 2.2vw, 3rem);
	--slide-padding: clamp(1.5rem, 5vw, 10rem);
	--accent-width: clamp(0.4rem, 0.6vw, 0.8rem);
	--accent-height: clamp(1.4rem, 2vw, 2.6rem);
	--stripe-width: clamp(2.5rem, 5.8vw, 11.5rem);
     width: 100%;
	display: flex;
	padding: 0 var(--slide-padding);
	gap: var(--slide-gap);
	color: #c8d2e6;
	z-index: 1;
	box-sizing: border-box;

	&::after {
		content: '';
		position: absolute;
		z-index: 2;
		top: 45%;
		transform: translateY(-50%) skewX(-22.5deg);
		height: calc(var(--slide-base) * 0.7);
		width: var(--stripe-width);
		/* центр полоски на стыке картинки и контента */
		right: calc(var(--slide-base) - 31rem);
		background: #d7ff23;

		clip-path: inset(0 0 100% 0);
		transition: clip-path 0.8s ease-out 0.2s;

		${({ $visible }) =>
			$visible &&
			css`
				clip-path: inset(0 0 0 0);
			`}
	}
`