import { type ButtonHTMLAttributes, type FC } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
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
}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  children,
  isSquare,
  sizeSquared,
  sizeFont,
  ...props
}) => {
  const classNames: Array<Record<string, boolean | string>> = [
    className,
    styles[variant],
    styles[sizeSquared],
    styles[sizeFont],
    styles.button,
    { [styles.square]: isSquare }
  ];

  return (
    <button className={clsx(...classNames)} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: ThemeButton.CLEAR,
  sizeSquared: SizeSquaredButton.M,
  isSquare: false,
  sizeFont: SizeFontButton.M
};

export default Button;
