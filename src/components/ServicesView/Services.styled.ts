import styled, { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const VerticalTabsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  /* Переопределяем стили Tabs для вертикального отображения */
  & > div {
    display: flex;
    gap: 2rem;
    min-height: 500px;
  }

  & > div > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 200px;
    border-right: 2px solid #e0e0e0;
    padding-right: 1.5rem;
  }

  & button {
    padding: 1rem 1.5rem;
    background: transparent;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    position: relative;
    width: 100%;

    &:hover {
      background: #f5f5f5;
      color: #333;
    }

    &[data-active="true"] {
      background: #4a90e2;
      color: white;
      box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);

      &::before {
        content: '';
        position: absolute;
        right: -1.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid white;
      }
    }
  }

  & > div > div:last-child {
    flex: 1;
    padding: 0.5rem 0 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    & > div {
      flex-direction: column;
      gap: 1rem;
    }

    & > div > div:first-child {
      flex-direction: row;
      flex-wrap: wrap;
      border-right: none;
      border-bottom: 2px solid #e0e0e0;
      padding-right: 0;
      padding-bottom: 1rem;
      min-width: unset;
      gap: 0.5rem;
    }

    & button {
      padding: 0.75rem 1.25rem;
      font-size: 0.9rem;
      width: auto;

      &[data-active="true"]::before {
        display: none;
      }
    }

    & > div > div:last-child {
      padding: 0.5rem 0;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const TabsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 200px;
  border-right: 2px solid #e0e0e0;
  padding-right: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    border-right: none;
    border-bottom: 2px solid #e0e0e0;
    padding-right: 0;
    padding-bottom: 1rem;
    min-width: unset;
    gap: 0.5rem;
  }
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 1rem 1.5rem;
  background: ${props => props.$isActive ? '#4a90e2' : 'transparent'};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$isActive ? 'white' : '#666'};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  box-shadow: ${props => props.$isActive ? '0 2px 8px rgba(74, 144, 226, 0.3)' : 'none'};

  &:hover {
    background: ${props => props.$isActive ? '#3a7bc8' : '#f5f5f5'};
    color: ${props => props.$isActive ? 'white' : '#333'};
  }

  ${props => props.$isActive && css`
    &::before {
      content: '';
      position: absolute;
      right: -1.5rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid white;
    }
  `}

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;

    ${props => props.$isActive && css`
      &::before {
        display: none;
      }
    `}
  }
`;

export const TabContent = styled.div`
  flex: 1;
  padding: 0.5rem 0 0.5rem 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export const ContentWrapper = styled.div`
  animation: ${fadeIn} 0.3s ease;
`;

export const ContentTitle = styled.h2`
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ContentText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 0.75rem 0;
  padding-left: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  color: #444;
  line-height: 1.5;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #4a90e2;
    font-weight: bold;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ContentDescription = styled.p`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  color: #555;
  line-height: 1.6;
`;