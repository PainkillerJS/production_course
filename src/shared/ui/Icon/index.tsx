import { type SVGProps, type VFC, memo } from 'react';

import { clsx } from './../../lib/classNames';

import styles from './icon.module.scss';

interface IconProps {
  Svg: VFC<SVGProps<SVGSVGElement>>;
  className?: string;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
  return <Svg className={clsx(className, styles.icon)} />;
});
