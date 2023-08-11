import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/helpers/classNames';
import { type FC } from 'react';

import style from './navbar.module.scss';
import AppLinks, { AppLinkTheme } from '@/shared/ui/AppLinks/AppLinks';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const navBarSettings = Object.values(routePath).filter(({ path }) => path !== '*');

  return (
    <div className={clsx(style.navbar, className)}>
      <div className={style.links}>
        {navBarSettings.map(({ path, name }) => (
          <AppLinks theme={AppLinkTheme.SECONDARY} key={path} to={path}>
            {name}
          </AppLinks>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
