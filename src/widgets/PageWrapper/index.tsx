import { type ReactNode, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

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
   * @description кастомный id
   */
  id?: string;
}

export const PageWrapper = memo(({ className, children, id }: PageWrapperProps) => {
  return (
    <section data-testid='page-wrapper' className={clsx(className, styles.pageWrapper)} id={id}>
      {children}
    </section>
  );
});
