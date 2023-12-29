import { type HTMLAttributes, type ReactNode, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './card.module.scss';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description кастомные стили
   */
  className?: string;
  /**
   * @description содержимое карточки
   */
  children: ReactNode;
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => {
  return (
    <div data-testid='card' className={clsx(className, styles.card)} {...otherProps}>
      {children}
    </div>
  );
});
