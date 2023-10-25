import { type PropsWithChildren, memo } from 'react';

import { type LinkProps, Link } from 'react-router-dom';

import { clsx } from '@/shared/lib/classNames';

import style from './appLinks.module.scss';

export enum AppLinkVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinksProps extends PropsWithChildren, LinkProps {
  className?: string;
  variants?: AppLinkVariants;
}

const AppLinks = memo(
  ({ className, children, variants = AppLinkVariants.PRIMARY, ...otherProps }: AppLinksProps) => {
    return (
      <Link data-testid='appLinks' className={clsx(className, style[variants])} {...otherProps}>
        {children}
      </Link>
    );
  }
);

export default AppLinks;
