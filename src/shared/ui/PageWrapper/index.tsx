import { type MutableRefObject, type ReactNode, memo, useRef } from 'react';

import { clsx } from '@/shared/lib/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';

import styles from './pageWrapper.module.scss';

interface PageWrapperProps {
  /**
   * @description кастомные стили
   */
  className?: string;
  /**
   * @description Внутренние компоненты
   */
  children?: ReactNode;
  /**
   * @description функция на окончание скролла
   */
  onScrollEnd?: () => void;
}

export const PageWrapper = memo(({ className, children, onScrollEnd }: PageWrapperProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef
  });

  return (
    <section
      ref={wrapperRef}
      data-testid='page-wrapper'
      className={clsx(className, styles.pageWrapper)}
    >
      {children}

      <div ref={triggerRef} />
    </section>
  );
});
