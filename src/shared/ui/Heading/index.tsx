import { type HTMLAttributes, type ReactNode } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './heading.module.scss';

export enum TextHeadingTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
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
}

export const Heading = ({
  className,
  children,
  variant = TextHeadingTheme.PRIMARY,
  ...props
}: HeadingProps) => {
  return (
    <h1 className={clsx(className, styles.title, styles[variant])} {...props}>
      {children}
    </h1>
  );
};
