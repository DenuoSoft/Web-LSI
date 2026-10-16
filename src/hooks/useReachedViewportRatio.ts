import {useEffect, useState, type RefObject} from 'react';

// ratio = 0.5 — середина экрана, 0 — верх экрана, 1 — низ
export const useReachedViewportRatio = (
	ref: RefObject<HTMLElement | null>,
	ratio = 0.5,
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
			setReached(el.getBoundingClientRect().top <= window.innerHeight * ratio);
		};

		check();
		window.addEventListener('scroll', check, {passive: true});
		window.addEventListener('resize', check);
		return () => {
			window.removeEventListener('scroll', check);
			window.removeEventListener('resize', check);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ratio, ...deps]);

	return reached;
};