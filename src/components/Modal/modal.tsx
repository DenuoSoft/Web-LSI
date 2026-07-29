// src/components/Modal/modal.tsx
import { useEffect, useRef, useState, useCallback, forwardRef } from 'react';
import type { ReactNode, MouseEvent, KeyboardEvent } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
} from './modal.styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, children }, ref) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const shouldRender = isOpen || isVisible;

    const handleClickOutside = useCallback(
      (event: MouseEvent | globalThis.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      },
      [onClose]
    );

    const handleEscapeKey = useCallback(
      (event: KeyboardEvent | globalThis.KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      },
      [onClose]
    );

    const cleanup = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
      document.removeEventListener('keydown', handleEscapeKey as unknown as EventListener);
      document.body.style.overflow = 'unset';
    }, [handleClickOutside, handleEscapeKey]);

    useEffect(() => {
      if (isOpen) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }

        document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
        document.addEventListener('keydown', handleEscapeKey as unknown as EventListener);
        document.body.style.overflow = 'hidden';

        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
        }, 10);

        return cleanup;
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }

        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 0);

        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
          document.removeEventListener('keydown', handleEscapeKey as unknown as EventListener);
          document.body.style.overflow = 'unset';
        };
      }
    }, [isOpen, handleClickOutside, handleEscapeKey, cleanup]);

    if (!shouldRender) return null;

    return (
      <ModalOverlay
        $isVisible={isVisible}
        onClick={handleClickOutside as unknown as (event: MouseEvent<HTMLDivElement>) => void}
      >
        <ModalContent 
          className="modal-content" 
          $isVisible={isVisible} 
          ref={(node) => {
            modalRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          role="dialog" 
          aria-modal="true"
          id="modal-content"
        >
          <ModalHeader>
            <CloseButton onClick={onClose} aria-label="Close modal">
              &times;
            </CloseButton>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </ModalOverlay>
    );
  }
);

Modal.displayName = 'Modal';