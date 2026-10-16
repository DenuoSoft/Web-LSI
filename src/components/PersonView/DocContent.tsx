import React from 'react';
import type {
	ContentBlock,
	ListBlock,
	TextNode,
} from '../../models/people-model';
import type {SectionData} from './docSection';
import {
	BulletList,
	DocH1,
	DocH2,
	DocH3,
	DocH4,
	DocH5,
	DocH6,
	DocSection,
	ListItem,
	NumberedList,
	Paragraph,
	Run,
} from './PersonView.styled';

const HEADINGS = [DocH1, DocH2, DocH3, DocH4, DocH5, DocH6] as const;

// Текст с inline-форматированием (bold / italic / underline)
export const Runs = ({node}: {node: TextNode}) => {
	const {text, runs} = node;

	if (!runs?.length) {
		return <>{text}</>;
	}

	return (
		<>
			{runs.map((run, index) => {
				const {bold, italic, underline} = run;

				if (!bold && !italic && !underline) {
					return <React.Fragment key={index}>{run.text}</React.Fragment>;
				}

				return (
					<Run key={index} $bold={bold} $italic={italic} $underline={underline}>
						{run.text}
					</Run>
				);
			})}
		</>
	);
};

// Список рекурсивно: вложенные списки лежат в children пункта
export const DocList = ({list, depth = 0}: {list: ListBlock; depth?: number}) => {
	const List = list.ordered ? NumberedList : BulletList;

	return (
		<List $depth={depth}>
			{list.items.map((item, itemIndex) => (
				<ListItem key={itemIndex}>
					<Runs node={item} />
					{item.children?.map((child, childIndex) => (
						<DocList key={childIndex} list={child} depth={depth + 1} />
					))}
				</ListItem>
			))}
		</List>
	);
};

export const DocBlock = ({block}: {block: ContentBlock}) => {
	switch (block.type) {
		case 'heading': {
			const level = Math.min(Math.max(block.level || 1, 1), 6);
			const Heading = HEADINGS[level - 1];

			return (
				<Heading>
					<Runs node={block} />
				</Heading>
			);
		}

		case 'paragraph':
			return (
				<Paragraph>
					<Runs node={block} />
				</Paragraph>
			);

		case 'list':
			return <DocList list={block} />;

		default:
			return null;
	}
};

// Одна секция — один независимый блок
export const DocSectionView = ({section}: {section?: SectionData}) => {
	if (!section) {
		return null;
	}

	return (
		<DocSection>
			{section.blocks.map((block, index) => (
				<DocBlock key={index} block={block} />
			))}
		</DocSection>
	);
};