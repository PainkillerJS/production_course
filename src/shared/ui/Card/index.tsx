import { type HTMLAttributes, type ReactNode, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './card.module.scss';

export enum CardTheme {
  PRIMARY = 'primary',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @description содержимое карточки
   */
  children: ReactNode;
  /**
   * @description Тема карточки
   * @default CardTheme.PRIMARY
   */
  themeCard?: CardTheme;
  /**
   * @description кастомные стили
   */
  className?: string;
}

export const Card = memo(
  ({ className, children, themeCard = CardTheme.PRIMARY, ...otherProps }: CardProps) => {
    return (
      <div
        data-testid='card'
        className={clsx(className, styles.card, styles[themeCard])}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
);
