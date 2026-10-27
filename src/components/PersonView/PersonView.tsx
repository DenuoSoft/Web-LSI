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
	MembershipGroup,
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
import {CARD_LEVEL, splitIntoSections, type SectionData} from './docSection';
import {DocSectionView} from './DocContent';

const menuLinks: MenuLink[] = [
	{id: 'summary', label: 'Summary profile'},
	{id: 'experience', label: 'Experience'},
	{id: 'membership', label: 'Professional memberships'},
];

const MEMBERSHIP_TITLE = 'professional memberships';

const isMembershipSection = (section: SectionData) =>
	section.title?.trim().replace(/:$/, '').toLowerCase() === MEMBERSHIP_TITLE;

export const PersonView = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const personItemRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);

	const person = getPersonById(Number(id));
	const sections = splitIntoSections(person?.jsonData?.blocks);

	const cardSections = sections.filter((s) => s.level === CARD_LEVEL);
	const mainSections = sections.filter((s) => s.level !== CARD_LEVEL);

	const [summarySection, ...restSections] = mainSections;
	const membershipSection = restSections.find(isMembershipSection);
	const experienceSections = restSections.filter(
		(s) => !isMembershipSection(s),
	);

	const hasExperience = experienceSections.length > 0;
	const hasMembership = Boolean(membershipSection);

	const links = menuLinks.filter((link) => {
		if (link.id === 'experience') return hasExperience;
		if (link.id === 'membership') return hasMembership;
		return true;
	});

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

	const menuVisible = useRevealOnScroll(
		hasExperience ? 'experience' : 'membership',
		0.5,
	);

	//const person = getPersonById(Number(id));

	if (!person) {
		return <div>Person not found</div>;
	}

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

					<PersonEmailUnder $hidden={scrolled}>{person.email}</PersonEmailUnder>

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

					<SectionsGroup $direction="row">
						{summarySection && <DocSectionView section={summarySection} />}
						{cardSections.length > 0 && (
							<SectionsGroup>
								{cardSections.map((section) => (
									<DocSectionView key={section.key} section={section} />
								))}
							</SectionsGroup>
						)}
					</SectionsGroup>

					{hasExperience && (
						<SectionsGroup
							id="experience"
							ref={experienceRef}
							$filled={filled}
							$extendBottom={!hasMembership}
						>
							{experienceSections.map((section) => (
								<DocSectionView key={section.key} section={section} />
							))}
						</SectionsGroup>
					)}

					{membershipSection && (
						<MembershipGroup id="membership">
							<DocSectionView section={membershipSection} />
						</MembershipGroup>
					)}
				</InfoBlock>
			</PersonWrap>
		</PersonBlock>
	);
};
