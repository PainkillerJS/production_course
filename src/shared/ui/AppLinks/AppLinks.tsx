import { type FC, type PropsWithChildren } from 'react';

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

const AppLinks: FC<AppLinksProps> = ({ className, children, variants, ...otherProps }) => {
  return (
    <Link data-testid='appLinks' className={clsx(className, style[variants])} {...otherProps}>
      {children}
    </Link>
  );
};

AppLinks.defaultProps = {
  variants: AppLinkVariants.PRIMARY
};

export default AppLinks;
