import {
  type MutableRefObject,
  type ReactNode,
  type UIEvent,
  memo,
  useEffect,
  useRef
} from 'react';

import { useLocation } from 'react-router-dom';

import { getSafeScrollByPath, safeScrollAction } from '@/features/SafeScroll';

import { clsx } from '@/shared/lib/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';

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

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useAppSelector((state) => getSafeScrollByPath(state, pathname));

  useInfiniteScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  const onScroll = useThrottle((event: UIEvent<HTMLElement>) => {
    dispatch(
      safeScrollAction.setScrollPosition({
        position: event.currentTarget.scrollTop,
        path: pathname
      })
    );
  }, 1000);

  return (
    <section
      ref={wrapperRef}
      data-testid='page-wrapper'
      className={clsx(className, styles.pageWrapper)}
      onScroll={onScroll}
    >
      {children}

      <div ref={triggerRef} />
    </section>
  );
});
