import {useEffect, type RefObject} from 'react';

// Пишет прогресс скролла (0..1) в CSS-переменную --p элемента.
// 0 — страница вверху, 1 — прокручено ratio * высота экрана.
export const useScrollProgress = (
	ref: RefObject<HTMLElement | null>,
	ratio = 0.5,
	deps: unknown[] = [],
) => {
	useEffect(() => {
		let raf = 0;

		const update = () => {
			raf = 0;
			const distance = window.innerHeight * ratio;
			const p = Math.min(Math.max(window.scrollY / distance, 0), 1);
			ref.current?.style.setProperty('--p', p.toFixed(3));
		};

		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};

		update();
		window.addEventListener('scroll', onScroll, {passive: true});
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ratio, ...deps]);
};