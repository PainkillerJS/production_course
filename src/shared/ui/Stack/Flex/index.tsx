import { type ReactNode, memo } from 'react';

import styles from './flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';

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

interface FlexProps {
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  className?: string;
}

export const Flex = memo(
  ({ className, children, justify = 'start', align = 'start', direction = 'row' }: FlexProps) => {
    const classes = [
      className,
      justifyStyles[justify],
      alignStyles[align],
      directionStyles[direction]
    ].join(' ');

    return <div className={classes}>{children}</div>;
  }
);
