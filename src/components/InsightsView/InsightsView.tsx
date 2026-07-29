import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
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
}

interface ContentRendererProps {
  content: ContentItem[];
}

// ===== КОМПОНЕНТ ДЛЯ ОДНОЙ ССЫЛКИ НА СНОСКУ =====
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

// ===== КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ ЗАГОЛОВКА =====
const HeadingRenderer = ({ level, children }: { level: number; children: React.ReactNode }) => {
  switch (level) {
    case 1:
      return <h1 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h1>;
    case 2:
      return <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h2>;
    case 3:
      return <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h3>;
    case 4:
      return <h4 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h4>;
    case 5:
      return <h5 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h5>;
    case 6:
      return <h6 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h6>;
    default:
      return <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>{children}</h2>;
  }
};

// ===== ТУЛТИП =====
interface TooltipPortalProps {
  text: string;
  x: number;
  y: number;
  visible: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const TooltipPortal = ({ text, x, y, visible, position }: TooltipPortalProps) => {
  if (!visible || !text) return null;

  const modalElement = document.getElementById('modal-content');
  if (!modalElement) return null;

  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return {
          transform: 'translateX(-50%) translateY(-100%)',
          top: y,
          left: x,
          triangle: {
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid #1a1a2e'
          }
        };
      case 'bottom':
        return {
          transform: 'translateX(-50%) translateY(0)',
          top: y,
          left: x,
          triangle: {
            top: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderBottom: '8px solid #1a1a2e'
          }
        };
      case 'left':
        return {
          transform: 'translateX(-100%) translateY(-50%)',
          top: y,
          left: x,
          triangle: {
            right: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '8px solid #1a1a2e'
          }
        };
      case 'right':
        return {
          transform: 'translateX(0) translateY(-50%)',
          top: y,
          left: x,
          triangle: {
            left: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderRight: '8px solid #1a1a2e'
          }
        };
      default:
        return {
          transform: 'translateX(-50%) translateY(-100%)',
          top: y,
          left: x,
          triangle: {
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid #1a1a2e'
          }
        };
    }
  };

  const styles = getPositionStyles();

  return createPortal(
    <div
      style={{
        position: 'absolute',
        top: styles.top,
        left: styles.left,
        transform: styles.transform,
        backgroundColor: '#1a1a2e',
        color: '#fff',
        padding: '10px 16px',
        borderRadius: '8px',
        fontSize: '0.85em',
        maxWidth: '280px',
        minWidth: '100px',
        wordWrap: 'break-word',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        pointerEvents: 'none',
        border: '1px solid rgba(255,255,255,0.1)',
        lineHeight: '1.5',
        zIndex: 10000
      }}
    >
      {text}
      <div
        style={{
          position: 'absolute',
          ...styles.triangle
        }}
      />
    </div>,
    modalElement
  );
};

// ===== КОМПОНЕНТ ДЛЯ ОТОБРАЖЕНИЯ ФОРМАТИРОВАННОГО ТЕКСТА =====
const FormattedTextView = ({ formattedText, footnoteTexts }: FormattedTextViewProps) => {
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
    visible: boolean;
    position: 'top' | 'bottom' | 'left' | 'right';
  }>({
    text: '',
    x: 0,
    y: 0,
    visible: false,
    position: 'top'
  });

  const getModalElement = (): HTMLElement | null => {
    return document.getElementById('modal-content');
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>, text: string, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const modalElement = getModalElement();
    
    if (!modalElement) return;
    
    const modalRect = modalElement.getBoundingClientRect();
    const tooltipWidth = 280;
    const tooltipHeight = 80;
    
    const paddingTop = 10;
    const paddingBottom = 10;
    const minPadding = 5;
    
    const footnoteX = rect.left - modalRect.left + rect.width / 2;
    const footnoteY = rect.top - modalRect.top;
    const footnoteBottom = rect.bottom - modalRect.top;
    
    const fitsAbove = footnoteY - paddingTop - tooltipHeight >= minPadding;
    const fitsBelow = footnoteBottom + paddingBottom + tooltipHeight <= modalRect.height - minPadding;
    const fitsLeft = footnoteX - paddingTop - tooltipWidth >= minPadding;
    const fitsRight = footnoteX + paddingTop + tooltipWidth <= modalRect.width - minPadding;
    
    let x = footnoteX;
    let y = footnoteY - paddingTop;
    let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
    
    if (fitsAbove) {
      y = footnoteY - paddingTop;
      position = 'top';
    } else if (fitsBelow) {
      y = footnoteBottom + paddingBottom;
      position = 'bottom';
    } else if (fitsRight) {
      x = footnoteX + paddingTop;
      y = footnoteY + rect.height / 2;
      position = 'right';
    } else if (fitsLeft) {
      x = footnoteX - paddingTop;
      y = footnoteY + rect.height / 2;
      position = 'left';
    } else {
      y = minPadding;
      position = 'top';
    }
    
    if (position === 'top' || position === 'bottom') {
      if (x - tooltipWidth / 2 < minPadding) {
        x = tooltipWidth / 2 + minPadding;
      }
      if (x + tooltipWidth / 2 > modalRect.width - minPadding) {
        x = modalRect.width - tooltipWidth / 2 - minPadding;
      }
    }
    
    if (position === 'left' || position === 'right') {
      if (y - tooltipHeight / 2 < minPadding) {
        y = tooltipHeight / 2 + minPadding;
      }
      if (y + tooltipHeight / 2 > modalRect.height - minPadding) {
        y = modalRect.height - tooltipHeight / 2 - minPadding;
      }
    }
    
    setTooltip({
      text,
      x,
      y,
      visible: true,
      position
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

        let element: React.ReactNode = <span key={idx}>{part.text}</span>;

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

      <TooltipPortal 
        text={tooltip.text}
        x={tooltip.x}
        y={tooltip.y}
        visible={tooltip.visible}
        position={tooltip.position}
      />
    </>
  );
};

// ===== ФУНКЦИЯ ДЛЯ ПРОВЕРКИ СПИСКА СНОСОК =====
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
const ContentRenderer = ({ content }: ContentRendererProps) => {
  const filteredContent = useMemo(() => {
    return content.filter((item: ContentItem) => {
      if (item.type === 'footnotes') return false;
      if (isList(item) && isFootnoteList(item)) return false;
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
                  />
                ) : (
                  <span>{item.text}</span>
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
            <HeadingRenderer key={index} level={item.level || 2}>
              {hasFormatted ? (
                <FormattedTextView 
                  formattedText={formattedText} 
                  footnoteTexts={footnoteTexts}
                />
              ) : (
                <span>{item.text}</span>
              )}
            </HeadingRenderer>
          );
        }

        if (isList(item)) {
          if (isFootnoteList(item)) return null;
          
          return (
            <div key={index} style={{ marginBottom: '15px' }}>
              {item.items.map((listItem: ListItem, idx: number) => {
                const formattedText = listItem.formatted_text;
                const hasFormatted = formattedText && formattedText.length > 0;
                const footnoteTexts = listItem.footnote_texts;
                
                return (
                  <div 
                    key={idx} 
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
                        />
                      ) : (
                        <span>{listItem.text}</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          );
        }

        if (isTable(item)) {
          return (
            <table key={index} style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <tbody>
                {item.data.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top' }}>
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
                                />
                              ) : (
                                <span>{cellContent.text}</span>
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
      if (isParagraph(item) && item.text) return item.text;
      if (isHeading(item) && item.text) return item.text;
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
            if (extractedText) previewText = extractedText;
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedEvent && (
          <SelectedItem>
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            {selectedEvent.fullText && selectedEvent.fullText.length > 0 ? (
              <ContentRenderer content={selectedEvent.fullText} />
            ) : (
              <p>{selectedEvent.text}</p>
            )}
          </SelectedItem>
        )}
      </Modal>
    </>
  );
};