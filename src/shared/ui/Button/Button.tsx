import { type ButtonHTMLAttributes, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeFontButton {
  M = 'size_font_m',
  L = 'size_font_l',
  XL = 'size_font_xl'
}

export enum SizeSquaredButton {
  M = 'm',
  L = 'l',
  XL = 'xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @description Кастомное имя стилей
   */
  className?: string;
  /**
   * @default ThemeButton.CLEAR
   * @description Тип кнопки
   */
  variant?: ThemeButton;
  /**
   * @default false
   * @description Тип кнопки
   */
  isSquare?: boolean;
  /**
   * @default SizeSquaredButton.M
   * @description Размер кнопки в связке с isSquare
   */
  sizeSquared?: SizeSquaredButton;
  /**
   * @default SizeFontButton.M
   * @description Размер шрифта кнопки
   */
  sizeFont?: SizeFontButton;
  /**
   * @description Флаг для блокировки кнопки
   */
  disabled?: boolean;
}

const Button = memo(
  ({
    className,
    variant = ThemeButton.CLEAR,
    children,
    isSquare,
    sizeSquared = SizeSquaredButton.M,
    sizeFont = SizeFontButton.M,
    disabled,
    ...props
  }: ButtonProps) => {
    const classNames: Array<Record<string, boolean | string>> = [
      className,
      styles[variant],
      styles[sizeSquared],
      styles[sizeFont],
      styles.button,
      { [styles.square]: isSquare, [styles.disabled]: disabled }
    ];

    return (
      <button className={clsx(...classNames)} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
