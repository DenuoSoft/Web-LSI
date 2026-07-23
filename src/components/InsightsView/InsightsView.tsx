import { useState, useMemo } from 'react';
import { insights } from './insights-data';
import { InsightsBlock, InsightsItem, SelectedItem } from './InsightsView.styled';
import { Modal } from '../Modal/modal';
import { Tabs } from '../Tabs/Tabs';
import type { TabItem } from '../../models/tabs';

interface InsightDetail {
  id: number;
  title: string;
  date: string;
  text: string;
  fullText?: string;
}

export const InsightsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState<InsightDetail | null>(null);

  const handleOpenModal = (insight: InsightDetail) => {
    setSelectedInsight(insight);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInsight(null);
  };

  const truncateText = (text: string, maxLength: number = 300) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Разделяем данные по типу
  const [insightsData, eventsData] = useMemo(() => {
    const insightsList = insights.filter(item => item.title === 'insight');
    const eventsList = insights.filter(item => item.title === 'Event');
    return [insightsList, eventsList];
  }, []);

  // Универсальный компонент для отображения списка
  const renderList = (data: InsightDetail[], isEvent: boolean = false) => (
    <InsightsBlock>
      {data.map((item) => (
        <InsightsItem 
          key={item.id} 
          onClick={() => isEvent ? handleOpenModal(item) : handleOpenModal(item)}
          style={{ cursor: 'pointer' }}
        >
          <h2>{item.title}</h2>
          <p>{item.date}</p>
          <p>{truncateText(item.text)}</p>
        </InsightsItem>
      ))}
    </InsightsBlock>
  );

  const tabs: TabItem[] = [
    { name: 'Insights' },
    { name: 'Events' }
  ];

  const content = {
    'Insights': renderList(insightsData, false),
    'Events': renderList(eventsData, true)
  };

  return (
    <>
      <Tabs tabs={tabs} content={content} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedInsight && (
          <SelectedItem>
            <h2>{selectedInsight.title}</h2>
            <p><strong>Date:</strong> {selectedInsight.date}</p>
            <p>{selectedInsight.fullText || selectedInsight.text}</p>
          </SelectedItem>
        )}
      </Modal>
    </>
  );
};