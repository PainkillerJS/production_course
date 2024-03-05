import { type HTMLAttributes, type ReactNode, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './typography.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l'
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * @description Кастомный className
   */
  className?: string;
  /**
   * @description Внутренний элемент компонента
   */
  children?: ReactNode;
  /**
   * @default TextTheme.PRIMARY
   * @description Тип текста
   */
  variant?: TextTheme;
  /**
   * @default TextSize.M
   * @description  Размер текста
   */
  size?: TextSize;
}

export const Text = memo(
  ({
    className,
    children,
    variant = TextTheme.PRIMARY,
    size = TextSize.M,
    ...props
  }: TextProps) => {
    return (
      <p className={clsx(className, styles.text, styles[variant], styles[size])} {...props}>
        {children}
      </p>
    );
  }
);
