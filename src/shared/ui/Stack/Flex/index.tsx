import { type ReactNode, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyStyles: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween
};

const alignStyles: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd
};

const directionStyles: Record<FlexDirection, string> = {
  column: styles.directionColumn,
  row: styles.directionRow
};

const gapStyles: Record<FlexGap, string> = {
  '4': styles.gap4,
  '8': styles.gap8,
  '16': styles.gap16,
  '32': styles.gap32
};

interface FlexProps {
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  className?: string;
  gap?: FlexGap;
  isMax?: boolean;
  testid?: string;
}

export const Flex = memo(
  ({
    className,
    children,
    justify = 'start',
    align = 'start',
    direction = 'row',
    gap,
    testid,
    isMax
  }: FlexProps) => {
    const classes = clsx(
      className,
      styles.flex,
      justifyStyles[justify],
      alignStyles[align],
      directionStyles[direction],
      gap && gapStyles[gap],
      {
        [styles.max]: isMax
      }
    );

    return (
      <div data-testid={testid} className={classes}>
        {children}
      </div>
    );
  }
);
