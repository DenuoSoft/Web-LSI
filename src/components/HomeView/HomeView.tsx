import { useState, useEffect, useRef, useCallback } from 'react';
import {
	HomeBlock,
	HomeText,
	HomeTextBlock,
//	HomeTitle,
	ImgBlock,
	ImgContainer,
	NavigationDots,
	Dot,
	TextWrapper,
	ImageWrapper,
	SlideContent,
	HomeBackground,
	HomeWrapper,
	HomeAkkut
} from './HomeView.styled';
import { homeData } from './home-data';
import type { HomeDataItem } from './home-data';

export const HomeView = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [prevIndex, setPrevIndex] = useState(0);

	const currentItem: HomeDataItem = homeData[currentIndex];

	const nextSlide = useCallback(() => {
		if (isTransitioning) return;
		
		setPrevIndex(currentIndex);
		setIsTransitioning(true);
		
		setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % homeData.length);
			setTimeout(() => {
				setIsTransitioning(false);
			}, 300);
		}, 150);
	}, [isTransitioning, currentIndex]);

	const goToSlide = useCallback((index: number) => {
		if (isTransitioning || index === currentIndex) return;
		
		setPrevIndex(currentIndex);
		setIsTransitioning(true);
		
		setTimeout(() => {
			setCurrentIndex(index);
			setTimeout(() => {
				setIsTransitioning(false);
			}, 100);
		}, 50);
	}, [isTransitioning, currentIndex]);

	useEffect(() => {
		if (!isHovered) {
			intervalRef.current = setInterval(nextSlide, 9000);
		} else {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};
	}, [isHovered, nextSlide]);

	const handleMouseEnter = useCallback(() => {
		setIsHovered(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setIsHovered(false);
	}, []);

	// Получаем предыдущий элемент для анимации
	const prevItem = homeData[prevIndex];

	return (
		<HomeBlock>
			<HomeWrapper>
				<HomeTextBlock>
				{/* <HomeTitle>Новости</HomeTitle> */}
				<TextWrapper>
					<SlideContent 
						$isTransitioning={isTransitioning}
						$direction="left"
					>
						<HomeText 
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<span className="date">{currentItem.date}</span>
							{currentItem.news}
						</HomeText>
					</SlideContent>
					{isTransitioning && (
						<SlideContent 
							$isTransitioning={true}
							$direction="left"
							$isExiting={true}
						>
							<HomeText>
								<span className="date">{prevItem.date}</span>
								{prevItem.news}
							</HomeText>
						</SlideContent>
					)}
				</TextWrapper>
				
				<NavigationDots>
					{homeData.map((_, index) => (
						<Dot
							key={index}
							active={index === currentIndex}
							onClick={() => goToSlide(index)}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						/>
					))}
				</NavigationDots>
			</HomeTextBlock>
			
			<ImgContainer>
				<ImageWrapper>
					<SlideContent 
						$isTransitioning={isTransitioning}
						$direction="left"
					>
						<ImgBlock image={currentItem.img} />
					</SlideContent>
					{isTransitioning && (
						<SlideContent 
							$isTransitioning={true}
							$direction="left"
							$isExiting={true}
						>
							<ImgBlock image={prevItem.img} />
						</SlideContent>
					)}
				</ImageWrapper>
			</ImgContainer>
			<HomeBackground>
			</HomeBackground>
			
			<HomeAkkut>
					
			</HomeAkkut>
			</HomeWrapper>
			
		</HomeBlock>
	);
};