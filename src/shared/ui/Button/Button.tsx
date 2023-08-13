import { type ButtonHTMLAttributes, type FC } from 'react';

import { clsx } from '@/shared/lib/helpers/classNames';

import styles from './button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Кастомное имя стилей
   */
  className?: string;
  /**
   * Тип кнопки
   */
  variant?: ThemeButton;
}

const Button: FC<ButtonProps> = ({ className, variant, children, ...props }) => {
  return (
    <button className={clsx(className, styles[variant], styles.button)} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: ThemeButton.CLEAR,
};

export default Button;
