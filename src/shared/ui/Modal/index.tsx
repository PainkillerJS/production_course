import {
  type MouseEventHandler,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import { clsx } from '@/shared/lib/classNames';

import { Portal } from '../Portal';

import styles from './modal.module.scss';

const ANNIMATION_DELAY = 300;

interface ModalProps {
  /**
   * @description Кастомное имя класса
   */
  className?: string;
  /**
   * @description Контент внутри компонента
   */
  children?: ReactNode;
  /**
   * @description Флаг на открытие модального окна
   */
  isOpen?: boolean;
  /**
   * @description Функция на закрытие модального окна
   */
  onClose?: () => void;
  /**
   * @description Ленивая загрузка модалки
   */
  isLazyLoading?: boolean;
}

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  isLazyLoading
}: ModalProps): JSX.Element => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<NodeJS.Timeout>();

  const handleClose = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANNIMATION_DELAY);
    }
  }, [onClose]);

  const handleContentClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  const mods = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (isLazyLoading && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div data-testid='modal' className={clsx(styles.modal, className, mods)}>
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
