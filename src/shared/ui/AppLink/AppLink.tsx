import { type PropsWithChildren, memo } from 'react';

import { type LinkProps, Link } from 'react-router-dom';

import { clsx } from '@/shared/lib/classNames';

import style from './appLink.module.scss';

export enum AppLinkVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends PropsWithChildren, LinkProps {
  className?: string;
  variants?: AppLinkVariants;
}

const AppLink = memo(
  ({ className, children, variants = AppLinkVariants.PRIMARY, ...otherProps }: AppLinkProps) => {
    return (
      <Link data-testid='appLink' className={clsx(className, style[variants])} {...otherProps}>
        {children}
      </Link>
    );
  }
);

export default AppLink;
