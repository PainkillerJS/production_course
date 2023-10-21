import { type HTMLAttributes, type ReactNode } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './typography.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
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
}

export const Text = ({ className, children, variant = TextTheme.PRIMARY, ...props }: TextProps) => {
  return (
    <p className={clsx(className, styles.text, styles[variant])} {...props}>
      {children}
    </p>
  );
};
