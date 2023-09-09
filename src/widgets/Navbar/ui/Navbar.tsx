import { type FC } from 'react';

import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import AppLinks, { AppLinkVariants } from '@/shared/ui/AppLinks/AppLinks';

import style from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const navBarSettings = Object.values(routePath).filter(({ path }) => path !== '*');

  return (
    <nav data-testid='navbar' className={clsx(style.navbar, className)}>
      <div data-testid='links' className={style.links}>
        {navBarSettings.map(({ path, name }) => (
          <AppLinks variants={AppLinkVariants.SECONDARY} key={path} to={path}>
            {name}
          </AppLinks>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
