import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {people} from './people-data';
import {
	ButtonReveal,
	ImageBlock,
	ImageWrap,
	ItemTitle,
	ItemWrap,
	PeopleImg,
	PeopleWrap,
	PeopleGrid,
	PeopleItem,
	PeopleTitle,
	ItemPosition,
} from './PeopleView.styled';
import {RoundButton} from '../../shared/buttons/RoundButton';

export const PeopleView = () => {
	const navigate = useNavigate();
	const [activeId, setActiveId] = useState<number | null>(null);

	const handlePersonClick = (id: number) => {
		navigate(`/person/${id}`);
	};

	// Тап по картинке работает только на устройствах без hover,
	// на десктопе раскрытием управляет :hover
	const handleImageClick = (id: number) => {
		if (!window.matchMedia('(hover: none)').matches) return;
		setActiveId((prev) => (prev === id ? null : id));
	};

	// Тап вне раскрытой карточки закрывает её
	useEffect(() => {
		if (activeId === null) return;
		const onPointerDown = (e: PointerEvent) => {
			const target = e.target as Element | null;
			if (!target?.closest('[data-active="true"]')) setActiveId(null);
		};
		document.addEventListener('pointerdown', onPointerDown);
		return () => document.removeEventListener('pointerdown', onPointerDown);
	}, [activeId]);

	return (
		<>
			<PeopleTitle>People</PeopleTitle>
			<PeopleGrid>
				{people.map((lawer) => (
					<PeopleItem key={lawer.id} data-active={activeId === lawer.id}>
						<PeopleWrap>
							<ImageWrap>
								<ImageBlock onClick={() => handleImageClick(lawer.id)}>
									<PeopleImg image={lawer.img} />
								</ImageBlock>
								<ButtonReveal>
									<RoundButton
										variant="people"
										onClick={() => handlePersonClick(lawer.id)}
									>
										View Profile
									</RoundButton>
								</ButtonReveal>
								<ItemWrap>
									<ItemTitle>{lawer.title}</ItemTitle>
									<ItemPosition>{lawer.position}</ItemPosition>
								</ItemWrap>
							</ImageWrap>
						</PeopleWrap>
					</PeopleItem>
				))}
			</PeopleGrid>
		</>
	);
};