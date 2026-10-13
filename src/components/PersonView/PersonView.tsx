import {useParams, useNavigate} from 'react-router-dom';
import React from 'react';
import {getPersonById} from '../PeopleView/people-data';
import {
	BulletList,
	DocH1,
	DocH2,
	DocH3,
	DocH4,
	DocH5,
	DocH6,
	DocSection,
	InfoBlock,
	ItemBadge,
	ItemBadgeWrap,
	ItemTitle,
	ListItem,
	NavBack,
	NavBackText,
	NumberedList,
	Paragraph,
	PersonBlock,
	PersonEmail,
	PersonImg,
	PersonImgWrap,
	PersonItem,
	PersonWrap,
	PositionTitle,
	Run,
	SectionsGroup,
} from './PersonView.styled';
import {ArrowLeft} from '../../shared/arrow-left';
import {ItemIcon} from '../../styles/shared';
import type {
	ContentBlock,
	ListBlock,
	TextNode,
} from '../../models/people-model';
import LeftMenu, {type MenuLink} from '../../shared/Nav/LeftMenu';
import {useScrollSpy} from '../../hooks/useScrollSpy';
import {useRevealOnScroll} from '../../hooks/useRevealOnScroll';

const menuLinks: MenuLink[] = [
	{id: 'summary', label: 'Summary profile'},
	{id: 'experience', label: 'Experience'},
];

const HEADINGS = [DocH1, DocH2, DocH3, DocH4, DocH5, DocH6] as const;

type SectionData = {
	key: string;
	title?: string; // текст заголовка секции (если секция начинается с заголовка)
	level?: number; // уровень заголовка, с которого начинается секция
	blocks: ContentBlock[]; // включая сам заголовок
};

const CARD_LEVEL = 6;

// Делит плоский список блоков на секции.
// Новая секция начинается на каждом заголовке самого верхнего уровня,
// который есть в документе, а также на каждом заголовке h6 (карточки).
// Контент до первого заголовка — отдельная секция без title.
const splitIntoSections = (blocks: ContentBlock[] = []): SectionData[] => {
	const levels = blocks.flatMap((block) =>
		block.type === 'heading' ? [block.level || 1] : [],
	);

	if (!levels.length) {
		return blocks.length ? [{key: 'section-0', blocks}] : [];
	}

	const splitLevel = Math.min(...levels);
	const sections: SectionData[] = [];
	let current: SectionData | null = null;

	for (const block of blocks) {
		if (
			block.type === 'heading' &&
			((block.level || 1) <= splitLevel || block.level === CARD_LEVEL)
		) {
			current = {
				key: `section-${sections.length}`,
				title: block.text,
				level: block.level || 1,
				blocks: [block],
			};
			sections.push(current);
			continue;
		}

		if (!current) {
			current = {key: `section-${sections.length}`, blocks: []};
			sections.push(current);
		}

		current.blocks.push(block);
	}

	return sections;
};

// Текст блока с inline-форматированием (bold / italic / underline)
const renderRuns = ({text, runs}: TextNode): React.ReactNode => {
	if (!runs?.length) {
		return text;
	}

	return runs.map((run, index) => {
		const {bold, italic, underline} = run;

		if (!bold && !italic && !underline) {
			return run.text;
		}

		return (
			<Run key={index} $bold={bold} $italic={italic} $underline={underline}>
				{run.text}
			</Run>
		);
	});
};

// Список рекурсивно: вложенные списки лежат в children пункта
const renderList = (
	list: ListBlock,
	depth: number,
	key: string,
): React.ReactNode => {
	const List = list.ordered ? NumberedList : BulletList;

	return (
		<List key={key} $depth={depth}>
			{list.items.map((item, itemIndex) => (
				<ListItem key={`${key}-${itemIndex}`}>
					{renderRuns(item)}
					{item.children?.map((child, childIndex) =>
						renderList(child, depth + 1, `${key}-${itemIndex}-${childIndex}`),
					)}
				</ListItem>
			))}
		</List>
	);
};

const renderBlock = (block: ContentBlock, index: number): React.ReactNode => {
	switch (block.type) {
		case 'heading': {
			const level = Math.min(Math.max(block.level || 1, 1), 6);
			const Heading = HEADINGS[level - 1];

			return <Heading key={`heading-${index}`}>{renderRuns(block)}</Heading>;
		}

		case 'paragraph':
			return (
				<Paragraph key={`paragraph-${index}`}>{renderRuns(block)}</Paragraph>
			);

		case 'list':
			return renderList(block, 0, `list-${index}`);

		default:
			return null;
	}
};

// Одна секция — один независимый блок
const renderSection = (section?: SectionData): React.ReactNode => {
	if (!section) {
		return null;
	}

	return (
		<DocSection key={section.key}>
			{section.blocks.map((block, index) => renderBlock(block, index))}
		</DocSection>
	);
};

export const PersonView = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	//const [visible, setVisible] = useState(false);

	// все хуки вызываются до раннего return
	const {activeId, handleClick} = useScrollSpy(menuLinks, {
		offset: 0.2,
		resetKey: id, // при переходе к другому человеку страница прокручивается наверх
	});
	const menuVisible = useRevealOnScroll('experience', 0.5);
	/* useEffect(() => {
		const raf = requestAnimationFrame(() => setVisible(true));
		return () => cancelAnimationFrame(raf);
	}, []); */

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
				<PersonItem>
					<PersonImgWrap>
						<PersonImg src={person.img} />
					</PersonImgWrap>

					<PersonEmail>{person.email}</PersonEmail>
					<ItemBadgeWrap>
						{person.badge.map((badge: string, index: number) => (
							<ItemBadge key={index}>{badge}</ItemBadge>
						))}
					</ItemBadgeWrap>
					{menuVisible && (
						<LeftMenu
							links={links}
							activeId={activeId}
							onItemClick={handleClick}
						/>
					)}
				</PersonItem>

				<InfoBlock>
					{/* Ряд: первая основная секция слева, карточки (h6) колонкой справа */}
					<ItemTitle id="summary">{person.title}</ItemTitle>
					{person.position && <PositionTitle>{person.position}</PositionTitle>}
					<SectionsGroup $direction="row">
						{renderSection(mainSections[0])}
						{cardSections.length > 0 && (
							<SectionsGroup>{cardSections.map(renderSection)}</SectionsGroup>
						)}
					</SectionsGroup>

					{/* Остальные основные секции — ниже, в колонку */}
					{mainSections.length > 1 && (
						<SectionsGroup id="experience">
							{mainSections.slice(1).map(renderSection)}
						</SectionsGroup>
					)}
				</InfoBlock>
			</PersonWrap>
		</PersonBlock>
	);
};
