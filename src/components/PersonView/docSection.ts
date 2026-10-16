import type {ContentBlock} from '../../models/people-model';

export type SectionData = {
	key: string;
	title?: string; // текст заголовка секции (если секция начинается с заголовка)
	level?: number; // уровень заголовка, с которого начинается секция
	blocks: ContentBlock[]; // включая сам заголовок
};

export const CARD_LEVEL = 6;

// Делит плоский список блоков на секции.
// Новая секция начинается на каждом заголовке самого верхнего уровня,
// который есть в документе, а также на каждом заголовке h6 (карточки).
// Контент до первого заголовка — отдельная секция без title.
export const splitIntoSections = (blocks: ContentBlock[] = []): SectionData[] => {
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