import { useState } from 'react';
import { insights } from './insights-data';
import { InsightsBlock, InsightsItem, SelectedItem } from './InsightsView.styled';
import { Modal } from '../Modal/modal'; // Путь к вашему Modal компоненту

interface InsightDetail {
  id: number;
  title: string;
  date: string;
  text: string;
  fullText?: string; // Добавьте, если есть полный текст
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

  // Функция для обрезки текста до 300 символов
  const truncateText = (text: string, maxLength: number = 300) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <>
      <InsightsBlock>
        {insights.map((insight) => (
          <InsightsItem 
            key={insight.id} 
            onClick={() => handleOpenModal(insight)}
            style={{ cursor: 'pointer' }} // Добавляем курсор для указания кликабельности
          >
            <h2>{insight.title}</h2>
            <p>{insight.date}</p>
           
            <p>{truncateText(insight.text)}</p>
          </InsightsItem>
        ))}
      </InsightsBlock>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedInsight && (
          <SelectedItem>
            <h2 >{selectedInsight.title}</h2>
            <p><strong>Date:</strong> {selectedInsight.date}</p>
            
            <p>{selectedInsight.fullText || selectedInsight.text}</p>
            {/* Добавьте дополнительный контент по необходимости */}
          </SelectedItem>
        )}
      </Modal>
    </>
  );
};