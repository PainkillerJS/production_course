import { type FC } from 'react';

import { getUserAuth } from '@/entities/User';

import { useAppSelector } from '@/shared/providers/StoreProvider';

import { AuthNavbar } from './AuthNavbar';
import { NoAuthNavbar } from './NoAuthNavbar';

export interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const authData = useAppSelector(getUserAuth);

  const NavbarComponent = Object.keys(authData).length ? AuthNavbar : NoAuthNavbar;

  return <NavbarComponent className={className} />;
};

export default Navbar;
