import { type CSSProperties, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './skeleton.module.scss';

interface SkeletonProps {
  /**
   * @description Кастомный className для стилей
   */
  className?: string;
  /**
   * @default 10
   * @description Высота скелетки
   */
  height?: string | number;
  /**
   * @default 100
   * @description Ширина скелетки
   */
  width?: string | number;
  /**
   * @description Округление скелетки
   */
  borderRadius?: string | number;
}

export const Skeleton = memo(
  ({ className, height = 10, width = 100, borderRadius }: SkeletonProps) => {
    const inlineStyle: CSSProperties = {
      height,
      width,
      borderRadius
    };

    return (
      <div
        data-testid='skeleton'
        className={clsx(className, styles.skeleton)}
        style={inlineStyle}
      />
    );
  }
);
