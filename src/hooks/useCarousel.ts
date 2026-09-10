import {useCallback, useEffect, useRef, useState} from 'react';

interface UseCarouselProps {
	length: number;
	visibleCount: number;
	interval?: number;
}

export const useCarousel = ({
	length,
	visibleCount,
	interval = 4000,
}: UseCarouselProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [isInstant, setIsInstant] = useState(false);
	const timerRef = useRef<number | null>(null);

	const next = useCallback(() => {
		setActiveIndex((prev) => prev + 1);
	}, []);

	const prev = useCallback(() => {
		setActiveIndex((prev) => {
			if (prev <= 0) {
				setIsInstant(true);
				return length;
			}
			return prev - 1;
		});
	}, [length]);

	const pause = useCallback(() => setIsPaused(true), []);
	const resume = useCallback(() => setIsPaused(false), []);

	useEffect(() => {
		if (isPaused || length <= visibleCount) return;
		timerRef.current = window.setInterval(next, interval);
		return () => {
			if (timerRef.current) window.clearInterval(timerRef.current);
		};
	}, [isPaused, next, interval, length, visibleCount]);

	return {
		activeIndex,
		setActiveIndex,
		next,
		prev,
		pause,
		resume,
		isInstant,
		setIsInstant,
	};
};