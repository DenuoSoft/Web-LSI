import { memo } from 'react';
import { Link } from 'react-router-dom';
import { insights } from './insights-data';
import { InsightsBlock, InsightsItem } from './InsightsView.styled';
import type { ContentItem } from '../../models/insights-model';
import { isParagraph, isHeading } from '../../models/insights-model';

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
export const InsightsView = memo(() => {
  const truncateText = (text: string, maxLength: number = 100) => {
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
    <InsightsBlock>
      {insights.map((insight) => {
        let previewText = insight.text;
        if (insight.fullText && insight.fullText.length > 0) {
          const extractedText = getPreviewText(insight.fullText);
          if (extractedText) previewText = extractedText;
        }
        return (
          <InsightsItem key={insight.id}>
            <Link
              to={`/insights/${insight.id}`}
              style={{ textDecoration: 'none',  display: 'block' }}
            >
              <h2>{insight.title}</h2>
              <p>{insight.date}</p>
              <p>{truncateText(previewText)}</p>
            </Link>
          </InsightsItem>
        );
      })}
    </InsightsBlock>
  );
});