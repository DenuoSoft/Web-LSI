import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';


export const ModalOverlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(98, 121, 167, 0.1);
   backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  opacity: 0;
  transition: background-color 0.8s ease, opacity 0.8s ease;
  pointer-events: none;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      background-color: rgba(98, 121, 167, 0.1);
      opacity: 1;
      pointer-events: auto;
    `}

  // Адаптация отступов для разных экранов
  @media (max-width: ${breakpoints.xl}) {
    padding: 15px;
  }

  @media (max-width: ${breakpoints.lg}) {
    padding: 15px;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 10px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 8px;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 5px;
  }
`;

export const ModalContent = styled.div<{ $isVisible: boolean }>`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur10px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  max-width: 800px;
  width: fit-content;
  min-width: 500px;
  max-height: 90vh;
  transform: scale(0.9) translateY(-20px);
  opacity: 0;
  transition: transform 0.8s ease, opacity 0.8s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      transform: scale(1) translateY(0);
      opacity: 1;
    `}

    @media (max-width: ${breakpoints.xxl}) {
    max-width: 750px;
  }

  @media (max-width: ${breakpoints.xl}) {
    max-width: 90%;
    min-width: 400px;
  }

  @media (max-width: ${breakpoints.lg}) {
    max-width: 92%;
    min-width: 350px;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 95%;
    min-width: unset;
    width: 100%;
    border-radius: 20px;
    max-height: 85vh;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 98%;
    border-radius: 16px;
    max-height: 80vh;
  }

  @media (max-width: ${breakpoints.xs}) {
    max-width: 100%;
    border-radius: 12px;
    max-height: 75vh;
  }
`;

export const ModalHeader = styled.div`
  padding: 10px 10px 0 10px;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.sm}) {
    padding: 8px 8px 0 8px;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 6px 6px 0 6px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #666;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: #333;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 36px;
    height: 36px;
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 32px;
    height: 32px;
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 28px;
    height: 28px;
    font-size: 18px;
  }
`;

export const ModalBody = styled.div`
  padding: 0 20px 20px 20px;
  flex: 1;
  overflow-y: auto;
  max-height: calc(90vh - 60px);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
    margin: 4px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;

    &:hover {
      background: #a8a8a8;
    }
  }

  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;

  // Адаптация внутренних отступов для разных экранов
  @media (max-width: ${breakpoints.lg}) {
    padding: 0 16px 16px 16px;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 0 14px 14px 14px;
    max-height: calc(85vh - 60px);
  }

  @media (max-width: ${breakpoints.sm}) {
    padding: 0 12px 12px 12px;
    max-height: calc(80vh - 60px);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 0 10px 10px 10px;
    max-height: calc(75vh - 60px);
  }
`;