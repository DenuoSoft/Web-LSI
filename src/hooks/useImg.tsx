import { useState, useEffect } from 'react';

interface UseImageReturn {
	isLoaded: boolean;
	error: string | null;
}

export function useImage(src: string): UseImageReturn {
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Не вызываем setState синхронно здесь
		let isMounted = true;
		
		const img = new Image();
		
		img.onload = () => {
			if (isMounted) {
				setIsLoaded(true);
				setError(null);
			}
		};
		
		img.onerror = (event: Event | string) => {
			if (isMounted) {
				const errorMessage = typeof event === 'string' 
					? event 
					: `Failed to load image: ${src}`;
				setError(errorMessage);
				setIsLoaded(false);
			}
		};
		
		img.src = src;
		
		// Если изображение уже загружено (кеш)
		if (img.complete) {
			// Вызываем асинхронно через setTimeout или микротаск
			queueMicrotask(() => {
				if (isMounted) {
					setIsLoaded(true);
					setError(null);
				}
			});
		}
		
		return () => {
			isMounted = false;
			img.onload = null;
			img.onerror = null;
		};
	}, [src]);

	return { isLoaded, error };
}