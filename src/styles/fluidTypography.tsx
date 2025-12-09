import type {FluidTypographyOptions} from '../models/fluid-typography';

export const fluidTypography = ({
	max = 48,
	min = 10,
	maxViewportWidth = 1400,
	minViewportWidth = 360,
}: FluidTypographyOptions = {}): string => {
	const maxSize = max / 10;
	const minSize = min / 10;
	const maxWidth = maxViewportWidth / 10;
	const minWidth = minViewportWidth / 10;

	const slope = (maxSize - minSize) / (maxWidth - minWidth);
	const yAxisIntersection = -minWidth * slope + minSize;

	return `
    font-size: clamp(
      ${minSize}rem,
      ${yAxisIntersection}rem + ${slope * 100}vw,
      ${maxSize}rem
    );
  `;
};
