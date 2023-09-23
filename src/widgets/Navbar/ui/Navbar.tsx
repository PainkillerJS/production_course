import { type FC } from 'react';

import { clsx } from '@/shared/lib/classNames';

import style from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return <nav data-testid='navbar' className={clsx(style.navbar, className)}></nav>;
};

export default Navbar;
