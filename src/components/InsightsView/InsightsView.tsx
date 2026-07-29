import { useState, useMemo, useRef } from 'react';
import { insights } from './insights-data';
import { InsightsBlock, InsightsItem, SelectedItem } from './InsightsView.styled';
import { Modal } from '../Modal/modal';
import type {
  ContentItem,
  FormattedText,
  insightsProps,
  ListItem,
  ListContent
} from '../../models/insights-model';
import {
  isParagraph,
  isHeading,
  isList,
  isTable,
} from '../../models/insights-model';

// ===== ПРОПСЫ ДЛЯ КОМПОНЕНТОВ =====

interface FormattedTextViewProps {
  formattedText: FormattedText[];
  footnoteTexts?: Record<string, string>;
  modalRef?: React.RefObject<HTMLDivElement | null>;
}

interface TextContentProps {
  text: string;
  formattedText?: FormattedText[];
  footnoteTexts?: Record<string, string>;
  modalRef?: React.RefObject<HTMLDivElement | null>;
}

interface ContentRendererProps {
  content: ContentItem[];
  modalRef?: React.RefObject<HTMLDivElement | null>;
}

// ===== КОМПОНЕНТ ДЛЯ ОДНОЙ ССЫЛКИ НА СНОСКУ С ТУЛТИПОМ =====
interface FootnoteLinkProps {
  text: string;
  footnoteText?: string;
  onMouseEnter: (e: React.MouseEvent<HTMLElement>, text: string, element: HTMLElement) => void;
  onMouseLeave: () => void;
}

const FootnoteLink = ({ 
  text, 
  footnoteText, 
  onMouseEnter, 
  onMouseLeave
}: FootnoteLinkProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (footnoteText) {
      onMouseEnter(e, footnoteText, e.currentTarget);
    }
  };

  return (
    <span
      style={{
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <sup style={{ 
        color: '#0066cc', 
        fontWeight: 'bold', 
        fontSize: '0.8em',
        textDecoration: footnoteText ? 'underline dotted #0066cc' : 'none'
      }}>
        {text}
      </sup>
    </span>
  );
};

// ===== КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ ФОРМАТИРОВАННОГО ТЕКСТА С ТУЛТИПАМИ =====
const FormattedTextView = ({ formattedText, footnoteTexts, modalRef }: FormattedTextViewProps) => {
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
    visible: boolean;
  }>({
    text: '',
    x: 0,
    y: 0,
    visible: false
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>, text: string, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    
    // Получаем границы модального окна
    let modalRect = null;
    if (modalRef?.current) {
      modalRect = modalRef.current.getBoundingClientRect();
    }
    
    // Размеры тултипа
    const tooltipHeight = 80;
    const tooltipWidth = 300;
    
    // Базовая позиция - над элементом
    let x = rect.left + rect.width / 2;
    let y = rect.top - 15;
    
    // Если есть модальное окно - ограничиваем его границами
    if (modalRect) {
      // Границы модального окна с отступами
      const modalLeft = modalRect.left + 30;
      const modalRight = modalRect.right - 30;
      const modalTop = modalRect.top + 20;
      const modalBottom = modalRect.bottom - 20;
      
      // Ограничиваем X
      if (x - tooltipWidth / 2 < modalLeft) {
        x = modalLeft + tooltipWidth / 2;
      }
      if (x + tooltipWidth / 2 > modalRight) {
        x = modalRight - tooltipWidth / 2;
      }
      
      // Если не помещается сверху - показываем снизу
      if (y - tooltipHeight < modalTop) {
        y = rect.bottom + 15;
      }
      
      // Проверяем, не выходит ли тултип за нижнюю границу
      if (y + tooltipHeight > modalBottom) {
        y = modalBottom - tooltipHeight;
      }
    }
    
    setTooltip({
      text,
      x,
      y,
      visible: true
    });
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  if (!formattedText || formattedText.length === 0) {
    return null;
  }

  return (
    <>
      {formattedText.map((part, idx) => {
        if (part.is_footnote_reference && part.footnote_id) {
          const footnoteText = footnoteTexts?.[part.footnote_id];
          
          return (
            <FootnoteLink
              key={idx}
              text={part.text}
              footnoteText={footnoteText}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          );
        }

        let element = <span key={idx}>{part.text}</span>;

        if (part.formatting.bold) {
          element = <strong key={idx}>{element}</strong>;
        }
        if (part.formatting.italic) {
          element = <em key={idx}>{element}</em>;
        }
        if (part.formatting.underline) {
          element = <u key={idx}>{element}</u>;
        }
        if (part.formatting.strike) {
          element = <del key={idx}>{element}</del>;
        }
        if (part.hyperlink) {
          element = (
            <a
              key={idx}
              href="#"
              style={{ color: '#0066cc', textDecoration: 'underline' }}
              onClick={(e) => e.preventDefault()}
            >
              {element}
            </a>
          );
        }

        return element;
      })}

      {tooltip.visible && (
        <div
          style={{
            position: 'fixed',
            top: tooltip.y,
            left: tooltip.x,
            transform: 'translateX(-50%) translateY(-100%)',
            backgroundColor: '#1a1a2e',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: '8px',
            fontSize: '0.85em',
            maxWidth: '300px',
            minWidth: '100px',
            wordWrap: 'break-word',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            zIndex: 9999,
            pointerEvents: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            lineHeight: '1.5'
          }}
        >
          {tooltip.text}
          <div
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid #1a1a2e'
            }}
          />
        </div>
      )}
    </>
  );
};

// ===== КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ ТЕКСТА =====
const TextContent = ({ text, formattedText, footnoteTexts, modalRef }: TextContentProps) => {
  if (formattedText && formattedText.length > 0) {
    return <FormattedTextView formattedText={formattedText} footnoteTexts={footnoteTexts} modalRef={modalRef} />;
  }
  return <>{text}</>;
};

// ===== КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ ЗАГОЛОВКА =====
const HeadingRenderer = ({ level, children }: { level: number; children: React.ReactNode }) => {
  switch (level) {
    case 1: return <h1 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h1>;
    case 2: return <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h2>;
    case 3: return <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h3>;
    case 4: return <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h4>;
    case 5: return <h5 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h5>;
    case 6: return <h6 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h6>;
    default: return <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h2>;
  }
};

// ===== ФУНКЦИЯ ДЛЯ ПРОВЕРКИ, ЯВЛЯЕТСЯ ЛИ СПИСОК СПИСКОМ СНОСОК =====
const isFootnoteList = (item: ListContent): boolean => {
  if (item.items.length > 5) {
    return true;
  }
  
  const allAreFootnotes = item.items.every((listItem: ListItem) => {
    const text = listItem.text || '';
    if (!text) return false;
    if (/^\d+\./.test(text)) return true;
    if (/Article/i.test(text)) return true;
    return false;
  });
  
  return allAreFootnotes;
};

// ===== КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ КОНТЕНТА =====
const ContentRenderer = ({ content, modalRef }: ContentRendererProps) => {
  const filteredContent = useMemo(() => {
    return content.filter((item: ContentItem) => {
      if (item.type === 'footnotes') {
        return false;
      }
      
      if (isList(item) && isFootnoteList(item)) {
        return false;
      }
      
      return true;
    });
  }, [content]);

  return (
    <div>
      {filteredContent.map((item, index) => {
        if (isParagraph(item)) {
          const formattedText = item.formatted_text;
          const hasFormatted = formattedText && formattedText.length > 0;
          const footnoteTexts = item.footnote_texts;
          
          return (
            <div key={index}>
              <p style={{ marginBottom: '10px', lineHeight: '1.6' }}>
                {hasFormatted ? (
                  <FormattedTextView 
                    formattedText={formattedText} 
                    footnoteTexts={footnoteTexts}
                    modalRef={modalRef}
                  />
                ) : (
                  <TextContent text={item.text} modalRef={modalRef} />
                )}
              </p>
            </div>
          );
        }

        if (isHeading(item)) {
          const formattedText = item.formatted_text;
          const hasFormatted = formattedText && formattedText.length > 0;
          const footnoteTexts = item.footnote_texts;
          
          return (
            <div key={index}>
              <HeadingRenderer level={item.level || 2}>
                {hasFormatted ? (
                  <FormattedTextView 
                    formattedText={formattedText} 
                    footnoteTexts={footnoteTexts}
                    modalRef={modalRef}
                  />
                ) : (
                  <TextContent text={item.text} modalRef={modalRef} />
                )}
              </HeadingRenderer>
            </div>
          );
        }

        if (isList(item)) {
          if (isFootnoteList(item)) {
            return null;
          }
          
          return (
            <div key={index} style={{ marginBottom: '15px' }}>
              {item.items.map((listItem: ListItem, idx: number) => {
                const formattedText = listItem.formatted_text;
                const hasFormatted = formattedText && formattedText.length > 0;
                const footnoteTexts = listItem.footnote_texts;
                
                return (
                  <div key={idx}>
                    <div
                      style={{
                        paddingLeft: `${(listItem.level || 0) * 20}px`,
                        marginBottom: '5px',
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                    >
                      <span style={{ marginRight: '8px' }}>
                        {item.list_type === 'bullet' ? '•' : `${idx + 1}.`}
                      </span>
                      <span>
                        {hasFormatted ? (
                          <FormattedTextView 
                            formattedText={formattedText} 
                            footnoteTexts={footnoteTexts}
                            modalRef={modalRef}
                          />
                        ) : (
                          <TextContent text={listItem.text} modalRef={modalRef} />
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        if (isTable(item)) {
          return (
            <table
              key={index}
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '20px'
              }}
            >
              <tbody>
                {item.data.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        style={{
                          border: '1px solid #ddd',
                          padding: '8px',
                          verticalAlign: 'top'
                        }}
                      >
                        {cell.map((cellContent, idx) => {
                          const formattedText = cellContent.formatted_text;
                          const hasFormatted = formattedText && formattedText.length > 0;
                          const footnoteTexts = cellContent.footnote_texts;
                          
                          return (
                            <div key={idx}>
                              {hasFormatted ? (
                                <FormattedTextView 
                                  formattedText={formattedText} 
                                  footnoteTexts={footnoteTexts}
                                  modalRef={modalRef}
                                />
                              ) : (
                                <TextContent text={cellContent.text} modalRef={modalRef} />
                              )}
                            </div>
                          );
                        })}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }

        return null;
      })}
    </div>
  );
};

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
export const InsightsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<insightsProps | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (insight: insightsProps) => {
    setSelectedEvent(insight);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const truncateText = (text: string, maxLength: number = 300) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const getPreviewText = (fullText: ContentItem[]): string => {
    if (!fullText || fullText.length === 0) return '';
    for (const item of fullText) {
      if (isParagraph(item) && item.text) {
        return item.text;
      }
      if (isHeading(item) && item.text) {
        return item.text;
      }
    }
    return '';
  };

  return (
    <>
      <InsightsBlock>
        {insights.map((insight) => {
          let previewText = insight.text;
          if (insight.fullText && insight.fullText.length > 0) {
            const extractedText = getPreviewText(insight.fullText);
            if (extractedText) {
              previewText = extractedText;
            }
          }
          return (
            <InsightsItem
              key={insight.id}
              onClick={() => handleOpenModal(insight)}
              style={{ cursor: 'pointer' }}
            >
              <h2>{insight.title}</h2>
              <p>{insight.date}</p>
              <p>{truncateText(previewText)}</p>
            </InsightsItem>
          );
        })}
      </InsightsBlock>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} ref={modalRef}>
        {selectedEvent && (
          <SelectedItem>
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            {selectedEvent.fullText && selectedEvent.fullText.length > 0 ? (
              <ContentRenderer content={selectedEvent.fullText} modalRef={modalRef} />
            ) : (
              <p>{selectedEvent.text}</p>
            )}
          </SelectedItem>
        )}
      </Modal>
    </>
  );
};