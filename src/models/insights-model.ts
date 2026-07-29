// ===== ТИПЫ ДЛЯ ФОРМАТИРОВАНИЯ =====
export interface TextFormatting {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strike: boolean;
  font_name?: string | null;
  font_size?: number | null;
  color?: string | null;
  superscript?: boolean;
}

export interface FormattedText {
  text: string;
  formatting: TextFormatting;
    hyperlink?: string | null;
    is_footnote_reference?: boolean;  // <-- Добавлено
  footnote_id?: string;             // <-- Добавлено
}

// ===== ТИП ДЛЯ СНОСОК =====
export type FootnoteTexts = Record<string, string>;

// ===== ТИПЫ ДЛЯ ЭЛЕМЕНТОВ КОНТЕНТА =====
export type ContentType = 'paragraph' | 'heading' | 'list' | 'table' | 'footnotes';

// Базовый интерфейс для всех элементов контента
export interface BaseContentItem {
  type: ContentType;
  text?: string;
  style?: string;
}

// Параграф
export interface ParagraphContent extends BaseContentItem {
  type: 'paragraph';
  text: string;
  formatted_text?: FormattedText[];
  footnote_texts?: FootnoteTexts; // <-- Добавлено
  has_footnotes?: boolean;
  footnote_refs?: string[];
}

// Заголовок
export interface HeadingContent extends BaseContentItem {
  type: 'heading';
  text: string;
  level: number;
  formatted_text?: FormattedText[];
  footnote_texts?: FootnoteTexts; // <-- Добавлено
  has_footnotes?: boolean;
  footnote_refs?: string[];
}

// Элемент списка
export interface ListItem {
  level: number;
  text: string;
  formatted_text?: FormattedText[];
  style?: string;
  footnote_texts?: FootnoteTexts; // <-- Добавлено
  has_footnotes?: boolean;
  footnote_refs?: string[];
}

// Список
export interface ListContent extends BaseContentItem {
  type: 'list';
  list_type: 'bullet' | 'numbered';
  items: ListItem[];
  footnote_texts?: FootnoteTexts; // <-- Добавлено для самого списка (опционально)
}

// Ячейка таблицы
export interface TableCellContent {
  text: string;
  formatted_text?: FormattedText[];
  style?: string;
  footnote_texts?: FootnoteTexts; // <-- Добавлено
  has_footnotes?: boolean;
}

export type TableCell = TableCellContent[];

export interface TableContent extends BaseContentItem {
  type: 'table';
  data: TableCell[][];
}

// Сноски
export interface FootnotesContent extends BaseContentItem {
  type: 'footnotes';
  data: Record<string, string>;
}

// Объединенный тип для всех элементов контента
export type ContentItem = 
  | ParagraphContent 
  | HeadingContent 
  | ListContent 
  | TableContent 
  | FootnotesContent;

// ===== ОСНОВНОЙ ИНТЕРФЕЙС ДАННЫХ =====
export interface insightsProps {
  id: number;
  title: string;
  date: string;
  text: string;
  fullText: ContentItem[];
  source?: string;
  conversion_date?: string;
  total_paragraphs?: number;
  total_tables?: number;
  has_footnotes?: boolean;
  has_hyperlinks?: boolean;
  footnotes?: Record<string, string>;
  hyperlinks?: Record<string, string>;
}

// ===== ФУНКЦИИ ДЛЯ ПРОВЕРКИ ТИПОВ (type guards) =====
export function isParagraph(item: ContentItem): item is ParagraphContent {
  return item.type === 'paragraph';
}

export function isHeading(item: ContentItem): item is HeadingContent {
  return item.type === 'heading';
}

export function isList(item: ContentItem): item is ListContent {
  return item.type === 'list';
}

export function isTable(item: ContentItem): item is TableContent {
  return item.type === 'table';
}

export function isFootnotes(item: ContentItem): item is FootnotesContent {
  return item.type === 'footnotes';
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
export function hasFootnoteTexts(item: ContentItem): boolean {
  if (isParagraph(item) || isHeading(item)) {
    return !!(item.footnote_texts && Object.keys(item.footnote_texts).length > 0);
  }
  return false;
}

export function getFootnoteTexts(item: ContentItem): FootnoteTexts | undefined {
  if (isParagraph(item) || isHeading(item)) {
    return item.footnote_texts;
  }
  return undefined;
}

// ===== ФУНКЦИЯ ДЛЯ НОРМАЛИЗАЦИИ ДАННЫХ =====
export function normalizeContentItem(data: unknown): ContentItem {
  const item = (typeof data === 'object' && data !== null) ? data as Record<string, unknown> : {};
  
  const rawType = typeof item.type === 'string' ? item.type as string : '';
  const validTypes: ContentType[] = ['paragraph', 'heading', 'list', 'table', 'footnotes'];
  const type = validTypes.includes(rawType as ContentType) ? rawType as ContentType : 'paragraph';

  const text = typeof item.text === 'string' ? item.text : '';
  const style = typeof item.style === 'string' ? item.style : undefined;
  
  // Извлекаем footnote_texts
  const footnote_texts = typeof item.footnote_texts === 'object' && item.footnote_texts !== null
    ? item.footnote_texts as Record<string, string>
    : {};

  switch (type) {
    case 'paragraph':
      return {
        type: 'paragraph',
        text,
        style,
        formatted_text: Array.isArray(item.formatted_text) ? item.formatted_text as FormattedText[] : [],
        footnote_texts,
        has_footnotes: Object.keys(footnote_texts).length > 0,
        footnote_refs: Array.isArray(item.footnote_refs) ? item.footnote_refs as string[] : []
      };

    case 'heading':
      return {
        type: 'heading',
        text,
        level: typeof item.level === 'number' ? item.level : 1,
        style,
        formatted_text: Array.isArray(item.formatted_text) ? item.formatted_text as FormattedText[] : [],
        footnote_texts,
        has_footnotes: Object.keys(footnote_texts).length > 0,
        footnote_refs: Array.isArray(item.footnote_refs) ? item.footnote_refs as string[] : []
      };

    case 'list':
      return {
        type: 'list',
        list_type: item.list_type === 'bullet' ? 'bullet' : 'numbered',
        items: Array.isArray(item.items) 
          ? (item.items as unknown[]).map((listItem: unknown) => {
              const li = listItem as Record<string, unknown>;
              const liFootnoteTexts = typeof li.footnote_texts === 'object' && li.footnote_texts !== null
                ? li.footnote_texts as Record<string, string>
                : {};
              return {
                level: typeof li.level === 'number' ? li.level : 0,
                text: typeof li.text === 'string' ? li.text : '',
                formatted_text: Array.isArray(li.formatted_text) ? li.formatted_text as FormattedText[] : [],
                style: typeof li.style === 'string' ? li.style : undefined,
                footnote_texts: liFootnoteTexts,
                has_footnotes: Object.keys(liFootnoteTexts).length > 0,
                footnote_refs: Array.isArray(li.footnote_refs) ? li.footnote_refs as string[] : []
              };
            })
          : [],
        style
      };

    case 'table':
      return {
        type: 'table',
        data: Array.isArray(item.data)
          ? (item.data as unknown[]).map((row: unknown) => {
              const rowData = row as unknown[];
              return rowData.map((cell: unknown) => {
                const cellData = cell as unknown[];
                return cellData.map((cellContent: unknown) => {
                  const cc = cellContent as Record<string, unknown>;
                  const ccFootnoteTexts = typeof cc.footnote_texts === 'object' && cc.footnote_texts !== null
                    ? cc.footnote_texts as Record<string, string>
                    : {};
                  return {
                    text: typeof cc.text === 'string' ? cc.text : '',
                    formatted_text: Array.isArray(cc.formatted_text) ? cc.formatted_text as FormattedText[] : [],
                    style: typeof cc.style === 'string' ? cc.style : undefined,
                    footnote_texts: ccFootnoteTexts,
                    has_footnotes: Object.keys(ccFootnoteTexts).length > 0
                  };
                });
              });
            })
          : [],
        style
      };

    case 'footnotes':
      return {
        type: 'footnotes',
        data: typeof item.data === 'object' && item.data !== null 
          ? item.data as Record<string, string> 
          : {},
        style
      };

    default:
      return {
        type: 'paragraph',
        text,
        style,
        formatted_text: Array.isArray(item.formatted_text) ? item.formatted_text as FormattedText[] : [],
        footnote_texts,
        has_footnotes: Object.keys(footnote_texts).length > 0,
        footnote_refs: Array.isArray(item.footnote_refs) ? item.footnote_refs as string[] : []
      };
  }
}

export function normalizeFullText(data: unknown[]): ContentItem[] {
  if (!data || !Array.isArray(data)) {
    return [];
  }
  return data.map(item => normalizeContentItem(item));
}