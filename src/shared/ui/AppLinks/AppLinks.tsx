import { type FC,type PropsWithChildren } from 'react';
import { type LinkProps,Link } from 'react-router-dom';

import { clsx } from '@/shared/lib/helpers/classNames';

import style from './appLinks.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinksProps extends PropsWithChildren, LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLinks: FC<AppLinksProps> = ({ className, children, theme, ...otherProps }) => {
  return (
    <Link className={clsx(className, style[theme])} {...otherProps}>
      {children}
    </Link>
  );
};

AppLinks.defaultProps = {
  theme: AppLinkTheme.PRIMARY,
};

export default AppLinks;
