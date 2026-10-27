import {useCallback, useEffect, useRef, useState} from 'react';

export type ScrollSpyItem = {id: string};

type Options = {
	/** Положение «линии чтения» от верха окна (0..1). По умолчанию 0.35 */
	offset?: number;
	/** Запасной таймаут разблокировки для браузеров без scrollend, мс */
	lockTimeout?: number;
	/** Прокручивать наверх при смене значения (например, id сервиса) */
	resetKey?: unknown;
	topOffset?: number;
};

export const useScrollSpy = (
	items: readonly ScrollSpyItem[],
	{offset = 0.35, lockTimeout = 1000, resetKey, topOffset = 0}: Options = {},
) => {
	const [activeId, setActiveId] = useState(items[0]?.id ?? '');
	// пока идёт скролл по клику, scroll-spy не должен перебивать выбор
	const lockRef = useRef(false);
	const timerRef = useRef<number | undefined>(undefined);

	// ключ зависимостей: эффект не пересоздаётся, если передан новый массив с теми же id
	const idsKey = items.map((item) => item.id).join('|');

	// сброс прокрутки при смене resetKey
	useEffect(() => {
		if (resetKey === undefined) return;
		window.scrollTo(0, 0);
	}, [resetKey]);

	// определяем активный раздел при скролле
	useEffect(() => {
		const ids = idsKey ? idsKey.split('|') : [];
		if (!ids.length) return;

		const update = () => {
			if (lockRef.current) return;

			const existing = ids.filter((id) => document.getElementById(id));
			if (!existing.length) return;

			const line = window.innerHeight * offset;
			let current = existing[0];

			for (const id of existing) {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= line) current = id;
			}

			const atBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 2;
			if (atBottom) current = existing[existing.length - 1];

			setActiveId(current);
		};

		update();
		window.addEventListener('scroll', update, {passive: true});
		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, [idsKey, offset]);

	// очистка таймера при размонтировании
	useEffect(() => () => window.clearTimeout(timerRef.current), []);

	const handleClick = useCallback(
		(id: string) => {
			const el = document.getElementById(id);
			if (!el) return;

			lockRef.current = true;
			setActiveId(id);

			// первый пункт — это начало страницы, а не позиция его заголовка
			if (id === items[0]?.id) {
				window.scrollTo({top: 0, behavior: 'smooth'});
			} else {
				const top = el.getBoundingClientRect().top + window.scrollY - topOffset;
				window.scrollTo({top, behavior: 'smooth'});
			}

			window.clearTimeout(timerRef.current);

			const unlock = () => {
				window.clearTimeout(timerRef.current);
				lockRef.current = false;
				window.dispatchEvent(new Event('scroll'));
			};
			window.addEventListener('scrollend', unlock, {once: true});
			timerRef.current = window.setTimeout(unlock, lockTimeout);
		},
		[items, lockTimeout, topOffset],
	);

	return {activeId, handleClick};
};
