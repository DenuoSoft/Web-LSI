import {useEffect, useState, type RefObject} from 'react';

export const useReachedHeader = (
	ref: RefObject<HTMLElement | null>,
	headerRem = 10,
	deps: unknown[] = [],
): boolean => {
	const [reached, setReached] = useState(false);

	useEffect(() => {
		const check = () => {
			const el = ref.current;
			if (!el) {
				setReached(false);
				return;
			}
			const rootFont = parseFloat(
				getComputedStyle(document.documentElement).fontSize,
			);
			setReached(el.getBoundingClientRect().top <= headerRem * rootFont);
		};

		check();
		window.addEventListener('scroll', check, {passive: true});
		window.addEventListener('resize', check);
		return () => {
			window.removeEventListener('scroll', check);
			window.removeEventListener('resize', check);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [headerRem, ...deps]);

	return reached;
};