
export type Person = {
	id: number;
	title: string;
	img: string;
	badge: string[];
	about: string;
	position?: string;
	email: string;
	jsonData?: PersonJsonData; // новый формат из docx_to_json.py
};

export type TextRun = {
	text: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
};

export type TextNode = {
	text: string;
	runs?: TextRun[];
};

export type HeadingBlock = TextNode & {
	type: 'heading';
	level: number;
};

export type ParagraphBlock = TextNode & {
	type: 'paragraph';
};

export type ListItemNode = TextNode & {
	// вложенные списки лежат внутри пункта-родителя
	children?: ListBlock[];
};

export type ListBlock = {
	type: 'list';
	ordered: boolean;
	items: ListItemNode[];
};

export type ContentBlock = HeadingBlock | ParagraphBlock | ListBlock;

export type PersonJsonData = {
	blocks: ContentBlock[];
};

// Person.jsonData в people-model.ts должен иметь тип PersonJsonData