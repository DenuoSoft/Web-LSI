import {useEffect, useMemo, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {people} from './people-data';
import {useCarousel} from '../../hooks/useCarousel';
import {
	ImageBlock,
	ItemBadge,
	ItemBadgeWrap,
	ItemTitle,
	ItemWrap,
	PeopleImg,
	PeopleWrap,
	CarouselRoot,
	CarouselViewport,
	CarouselTrack,
	CarouselItem,
	ArrowButton,
	PeopleTitle,
	ItemBlock,
} from './PeopleView.styled';
import {ArrowBack} from '../../shared/arrow_back';
import {ArrowForward} from '../../shared/arrow_forward';

const VISIBLE_COUNT = 4;
const AUTO_PLAY_INTERVAL = 6000;
const GAP_REM = 1;
const TRANSITION_MS = 600;

export const PeopleView = () => {
	const navigate = useNavigate();
	const viewportRef = useRef<HTMLDivElement>(null);
	const slideRef = useRef<HTMLDivElement>(null);

	const [viewportWidth, setViewportWidth] = useState(0);
	const [step, setStep] = useState(0);

	const realLength = people.length;
	const slides = useMemo(
		() => [...people, ...people.slice(0, VISIBLE_COUNT)],
		[],
	);

	const {
		activeIndex,
		setActiveIndex,
		next,
		prev,
		pause,
		resume,
		isInstant,
		setIsInstant,
	} = useCarousel({
		length: realLength,
		visibleCount: VISIBLE_COUNT,
		interval: AUTO_PLAY_INTERVAL,
	});

	// Замеряем реальную ширину слайда и viewport
	useEffect(() => {
		const viewport = viewportRef.current;
		const slide = slideRef.current;
		if (!viewport || !slide) return;

		const update = () => {
			const slideRect = slide.getBoundingClientRect();
			const gapPx = GAP_REM * 16;
			setStep(slideRect.width + gapPx);
			setViewportWidth(viewport.offsetWidth);
		};

		update();
		const ro = new ResizeObserver(update);
		ro.observe(viewport);
		ro.observe(slide);
		return () => ro.disconnect();
	}, []);

	const offsetPx = useMemo(() => {
		if (!viewportWidth || !step) return 0;
		return activeIndex * step - (viewportWidth / 2 - step / 2);
	}, [activeIndex, step, viewportWidth]);

	// Нормализация activeIndex через таймер (надёжнее onTransitionEnd)
	useEffect(() => {
		if (activeIndex < realLength) return;

		// Ждём завершения анимации, потом мгновенно прыгаем
		const t = setTimeout(() => {
			setIsInstant(true);
			setActiveIndex(activeIndex - realLength);
		}, TRANSITION_MS + 50);

		return () => clearTimeout(t);
	}, [activeIndex, realLength, setIsInstant, setActiveIndex]);

	// Возврат transition после мгновенного прыжка
	useEffect(() => {
		if (!isInstant) return;
		const id = requestAnimationFrame(() => {
			requestAnimationFrame(() => setIsInstant(false));
		});
		return () => cancelAnimationFrame(id);
	}, [isInstant, setIsInstant]);

	const handlePersonClick = (id: number) => {
		navigate(`/person/${id}`);
	};

	const activeRealIndex = activeIndex % realLength;

	return (
		<>
			<PeopleTitle>People</PeopleTitle>
			<CarouselRoot onMouseEnter={pause} onMouseLeave={resume}>
				<ArrowButton $direction="left" onClick={prev} aria-label="Назад">
					<ArrowBack />
				</ArrowButton>

				<CarouselViewport ref={viewportRef}>
					<CarouselTrack
						$offsetPx={offsetPx}
						$instant={isInstant}
						style={
							{
								'--visible': VISIBLE_COUNT,
								'--gap': `${GAP_REM}rem`,
							} as React.CSSProperties
						}
					>
						{slides.map((lawer, index) => {
							const isActive = index % realLength === activeRealIndex;
							return (
								<CarouselItem
									key={`${lawer.id}-${index}`}
									ref={index === 0 ? slideRef : undefined}
									$isActive={isActive}
									onClick={() => handlePersonClick(lawer.id)}
								>
									<PeopleWrap >
										<ImageBlock>
											<PeopleImg image={lawer.img} />
										</ImageBlock>
										<ItemBlock >
											<ItemWrap $isActive={isActive}>
												<ItemTitle>{lawer.title}</ItemTitle>
											</ItemWrap>
											<ItemBadgeWrap $isActive={isActive}>
												{lawer.badge.map((item, i) => (
													<ItemBadge key={i}>{item}</ItemBadge>
												))}
											</ItemBadgeWrap>
										</ItemBlock>
									</PeopleWrap>
								</CarouselItem>
							);
						})}
					</CarouselTrack>
				</CarouselViewport>

				<ArrowButton $direction="right" onClick={next} aria-label="Вперёд">
					<ArrowForward />
				</ArrowButton>
			</CarouselRoot>
		</>
	);
};
