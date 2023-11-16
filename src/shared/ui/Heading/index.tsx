import { type HTMLAttributes, type ReactNode } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './heading.module.scss';

export enum TextHeadingTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum HeadingSize {
  M = 'size_m',
  L = 'size_l'
}

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * @description Кастомный className
   */
  className?: string;
  /**
   * @description Внутренний элемент компонента
   */
  children?: ReactNode;
  /**
   * @default TextHeadingTheme.PRIMARY
   * @description Тип текста
   */
  variant?: TextHeadingTheme;
  /**
   * @default HeadingSize.M
   * @description Размер заголовка
   */
  size?: HeadingSize;
}

export const Heading = ({
  className,
  children,
  variant = TextHeadingTheme.PRIMARY,
  size = HeadingSize.M,
  ...props
}: HeadingProps) => {
  return (
    <h1 className={clsx(className, styles[variant], styles[size])} {...props}>
      {children}
    </h1>
  );
};
