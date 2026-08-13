export interface Formatting {
	bold: boolean;
	italic: boolean;
	underline: boolean;
	strike: boolean;
	font_name: string | null;
	font_size: number | null;
	color: string | null;
	superscript: boolean;
}

export interface FormattedPart {
	text: string;
	formatting: Formatting;
	hyperlink: string | null;
}

export interface ContentItem {
	type: 'paragraph' | 'heading' | 'list' | 'table';
	text?: string;
	formatted_text?: FormattedPart[] | string;
	style?: string | null;
	level?: number;
	list_type?: 'numbered' | 'bullet';
	items?: ListItem[];
	data?: TableData[][];
}

export interface ListItem {
	level: number;
	text: string;
	formatted_text: FormattedPart[] | string;
	style: string | null;
}

export type TableData = Array<{
	text: string;
	formatted_text: FormattedPart[] | string;
	style: string | null;
}>;

export interface PersonJsonData {
	source: string;
	conversion_date: string;
	total_paragraphs: number;
	total_tables: number;
	has_hyperlinks: boolean;
	hyperlinks: Record<string, string>;
	content: ContentItem[];
}

export interface peopleProps {
	id: number;
    title: string;
    email: string; 
	img: string;
	badge: string[];
	about: string;
	position?: string;
	jsonData?: PersonJsonData | null; // Используем конкретный тип вместо any
}