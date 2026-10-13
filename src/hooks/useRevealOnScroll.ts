import {useEffect, useState} from 'react';

/**
 * Возвращает true, когда верх элемента с данным id
 * достиг линии `offset` от верха окна (0.5 = середина экрана).
 * Если элемента нет в DOM, возвращает false.
 */
export const useRevealOnScroll = (id: string, offset = 0.5) => {
	const [revealed, setRevealed] = useState(false);

	useEffect(() => {
		const update = () => {
			const el = document.getElementById(id);
			setRevealed(
				!!el && el.getBoundingClientRect().top <= window.innerHeight * offset,
			);
		};

		update();
		window.addEventListener('scroll', update, {passive: true});
		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, [id, offset]);

	return revealed;
};