import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import {fadeInY} from '../../styles/animation';
import {fluidTypography} from '../../styles/fluidTypography';

interface PeopleImgProps {
	image?: string;
}

interface CarouselTrackProps {
	$offsetPx: number;
	$instant?: boolean;
}
interface CarouselItemProps {
	$isActive: boolean;
}
interface ArrowButtonProps {
	$direction: 'left' | 'right';
}

export const PeopleBlock = styled.div`
	display: flex;
	row-gap: 4rem;
	z-index: 1;
	//animation: ${fadeInY} 0.5s ease-in;

	@media (max-width: ${breakpoints.md}) {
		row-gap: 2rem;
	}
	@media (max-width: ${breakpoints.xs}) {
		row-gap: 1rem;
	}
`;
export const PeopleTitle = styled.div`
	position: relative;
	width: 100%;
	color: #c8d2e6;
	margin-bottom: 5rem;
	padding: 0 10rem;
	${fluidTypography({max: 20, min: 16})}
	font-weight: bold;

	&::before {
		content: '';
		position: absolute;
		left: 7rem;
		//top: calc(50% - 1.3rem);
		width: 0.8rem;
		height: 2.6rem;
		-webkit-transform: skew(-22deg) scale(0);
		-ms-transform: skew(-22deg) scale(0);
		transform: skew(-22deg) scale(1);
		background: #d7ff23;
	}
`;

export const PeopleItem = styled.div`
	//width: calc(100% / 5);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 3rem;
	padding: 2.4rem;
	cursor: pointer;
	position: relative;
	z-index: 1;
	&:hover {
		z-index: 2;
	}

	@media (max-width: ${breakpoints.xl}) {
		width: calc(100% / 3);
	}
	@media (max-width: ${breakpoints.lg}) {
	}
	@media (max-width: ${breakpoints.md}) {
		width: calc(100% / 2);
		row-gap: 2rem;
	}
	@media (max-width: ${breakpoints.sm}) {
		width: 100%;
		row-gap: 1rem;
	}
`;
export const ItemBlock = styled.div`
     display: flex;
	 flex-direction: column;
	 gap: 1.6rem;
	
  }
`;
export const ItemWrap = styled.div<CarouselItemProps>`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	cursor: pointer;
	opacity: ${(p) => (p.$isActive ? 1 : 0)};
	transform: translateX(${(p) => (p.$isActive ? '0' : '5rem')});
	transition:
		opacity 0.6s ease,
		transform 0.6s ease;
	transition-delay: ${(p) => (p.$isActive ? '200ms' : '300ms')};
`;
export const ItemBadgeWrap = styled.div<CarouselItemProps>`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 1.2rem;
	color: #c8d2e6;
	opacity: ${(p) => (p.$isActive ? 1 : 0)};
	transform: translateX(${(p) => (p.$isActive ? '0' : '3rem')});
	transition:
		opacity 0.9s ease,
		transform 0.9s ease;
	transition-delay: ${(p) => (p.$isActive ? '500ms' : '0ms')};

	@media (max-width: ${breakpoints.sm}) {
		justify-content: center;
	}
`;
export const PeopleWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	 &:hover {
    ${ItemWrap},
    ${ItemBadgeWrap} {
      opacity: 1;
      transform: translateX(0);
      transition-delay: 0ms;
    }
  }
}
`;

export const ItemTitle = styled.h6`
	font-weight: normal;
	color: #c8d2e6;
`;
export const ImageBlock = styled.div`
	width: 20rem;
	height: 30rem;
	transform: skewX(-22.5deg) translateZ(0);
	overflow: hidden;
	flex-shrink: 0;

	@media (max-width: ${breakpoints.md}) {
		width: 30rem;
		height: 22.5rem;
	}

	@media (max-width: ${breakpoints.sm}) {
		width: 100%;
		height: 22rem;
	}
`;
export const PeopleImg = styled.div<PeopleImgProps>`
	width: 162%;
	height: 100%;
	margin-left: -31%;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transform: skewX(22.5deg);
	transition: background-size 0.4s ease;

	${PeopleItem}:hover & {
		background-size: 110%;
	}

	@media (max-width: ${breakpoints.lg}) {
		width: 100%;
	}

	@media (max-width: ${breakpoints.sm}) {
		box-shadow: none;
	}
`;

export const ItemBadge = styled.div`
	padding: 0.2rem 0.8rem;
	border: 0.2px solid #c8d2e6;
	border-radius: 0.4rem;
	font-size: 1.2rem;
	line-height: 167%;
`;

export const CarouselRoot = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const CarouselViewport = styled.div`
	width: 90%;
	overflow: hidden;
	padding: 2rem 0;
`;

export const CarouselTrack = styled.div<CarouselTrackProps>`
	display: flex;
	gap: var(--gap);
	transform: translateX(${(p) => -p.$offsetPx}px);
	transition: ${(p) =>
		p.$instant ? 'none' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'};
	will-change: transform;
`;
export const CarouselItem = styled.div<CarouselItemProps>`
	//flex: 0 0 calc((100% - 2rem * (var(--visible) - 1)) / var(--visible));
	flex: 0 0 calc((100% - var(--gap) * (var(--visible) - 1)) / var(--visible));
	transition: transform 0.4s ease;
	transform: scale(${(p) => (p.$isActive ? 1.1 : 1)});
	z-index: ${(p) => (p.$isActive ? 2 : 1)};
	position: relative;
	cursor: pointer;
`;

export const ArrowButton = styled.button<ArrowButtonProps>`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	${(p) => (p.$direction === 'left' ? 'left: -2rem;' : 'right: -2rem;')}
	color: #c8d2e6;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 10;
	transition:
		background 0.2s,
		transform 0.2s;

	&:hover {
		background: rgba(200, 210, 230, 0.15);
	}

	&:active {
		transform: translateY(-50%) scale(0.95);
	}
`;
