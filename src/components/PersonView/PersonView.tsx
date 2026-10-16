import {useParams, useNavigate} from 'react-router-dom';
import {useRef} from 'react';
import {getPersonById} from '../PeopleView/people-data';
import {useScrollProgress} from '../../hooks/useScrollProgress';
import {useReachedHeader} from '../../hooks/useReachedHeader';
import {useReachedViewportRatio} from '../../hooks/useReachedViewportRatio';
import {useScrolled} from '../../hooks/useScrolled';
import {
	InfoBlock,
	ItemTitle,
	NavBack,
	NavBackText,
	PersonBlock,
	PersonEmail,
	PersonEmailUnder,
	PersonHead,
	PersonHeadText,
	PersonImg,
	PersonImgWrap,
	PersonItem,
	PersonPosition,
	PersonTitle,
	PersonWrap,
	PositionTitle,
	SectionsGroup,
} from './PersonView.styled';
import {ArrowLeft} from '../../shared/arrow-left';
import {ItemIcon} from '../../styles/shared';
import LeftMenu, {type MenuLink} from '../../shared/Nav/LeftMenu';
import {useScrollSpy} from '../../hooks/useScrollSpy';
import {useRevealOnScroll} from '../../hooks/useRevealOnScroll';
import {CARD_LEVEL, splitIntoSections} from './docSection';
import {DocSectionView} from './DocContent';

const menuLinks: MenuLink[] = [
	{id: 'summary', label: 'Summary profile'},
	{id: 'experience', label: 'Experience'},
];

export const PersonView = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const personItemRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);

	// все хуки вызываются до раннего return
	const reached = useReachedHeader(experienceRef, 50, [id]); // текст в липком блоке
	const filled = useReachedViewportRatio(experienceRef, 0.5, [id]); // фон
	const scrolled = useScrolled(10);
	useScrollProgress(personItemRef, 0.5, [id]);

	const {activeId, handleClick} = useScrollSpy(menuLinks, {
		offset: 0.2,
		resetKey: id,
		topOffset: 130,
	});

	const menuVisible = useRevealOnScroll('experience', 0.5);

	const person = getPersonById(Number(id));

	if (!person) {
		return <div>Person not found</div>;
	}

	// JSON-данные приходят из people-data.ts (person.jsonData = jsonDataMap[id]),
	// формат docx_to_json.py: {blocks: [...]}
	const {jsonData} = person;
	const sections = splitIntoSections(jsonData?.blocks);

	// Карточки (h6) и основные секции (всё остальное)
	const cardSections = sections.filter(
		(section) => section.level === CARD_LEVEL,
	);
	const mainSections = sections.filter(
		(section) => section.level !== CARD_LEVEL,
	);

	// пункт Experience показываем, только если соответствующий блок отрисован
	const links = menuLinks.filter(
		(link) => link.id !== 'experience' || mainSections.length > 1,
	);

	return (
		<PersonBlock>
			<NavBack onClick={() => navigate(-1)}>
				<ItemIcon>
					<ArrowLeft />
				</ItemIcon>
				<NavBackText>Back to people</NavBackText>
			</NavBack>

			<PersonWrap>
				<PersonItem ref={personItemRef}>
					<PersonHead>
						<PersonImgWrap>
							<PersonImg src={person.img} />
						</PersonImgWrap>

						<PersonHeadText $visible={reached}>
							<PersonTitle>{person.title}</PersonTitle>
							<PersonPosition>{person.position}</PersonPosition>
							<PersonEmail>{person.email}</PersonEmail>
						</PersonHeadText>
					</PersonHead>

					{/* под аватаром: виден до скролла, скрывается с его началом */}
					<PersonEmailUnder $hidden={scrolled}>{person.email}</PersonEmailUnder>

					{/* <ItemBadgeWrap>
						{person.badge.map((badge: string, index: number) => (
							<ItemBadge key={index}>{badge}</ItemBadge>
						))}
					</ItemBadgeWrap> */}

					{menuVisible && (
						<LeftMenu
							links={links}
							activeId={activeId}
							onItemClick={handleClick}
						/>
					)}
				</PersonItem>

				<InfoBlock>
					<ItemTitle id="summary">{person.title}</ItemTitle>
					{person.position && <PositionTitle>{person.position}</PositionTitle>}

					{/* Ряд: первая основная секция слева, карточки (h6) колонкой справа */}
					<SectionsGroup $direction="row">
						<DocSectionView section={mainSections[0]} />
						{cardSections.length > 0 && (
							<SectionsGroup>
								{cardSections.map((section) => (
									<DocSectionView key={section.key} section={section} />
								))}
							</SectionsGroup>
						)}
					</SectionsGroup>

					{/* Остальные основные секции — ниже, в колонку */}
					{mainSections.length > 1 && (
						<SectionsGroup id="experience" ref={experienceRef} $filled={filled}>
							{mainSections.slice(1).map((section) => (
								<DocSectionView key={section.key} section={section} />
							))}
						</SectionsGroup>
					)}
				</InfoBlock>
			</PersonWrap>
		</PersonBlock>
	);
};