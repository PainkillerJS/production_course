import { type CSSProperties, type ImgHTMLAttributes, useMemo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * @description Ссылка на картинку
   */
  srcImg: string;
  /**
   * @description Надпись, если аватар не подгрузился
   */
  alt: string;
  /**
   * @description кастомный classname
   */
  className?: string;
  /**
   * @default 100px
   * @description Размер картинки
   */
  size?: number;
}

export const Avatar = ({ className, srcImg, size = 100, ...props }: AvatarProps) => {
  const inlineStyles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size]);

  return (
    <img className={clsx(styles.avatar, className)} style={inlineStyles} src={srcImg} {...props} />
  );
};
