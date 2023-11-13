import { memo } from 'react';

import { getUserAuthUsername } from '@/entities/User';

import { useAppSelector } from '@/shared/providers/StoreProvider';

import { AuthNavbar } from './AuthNavbar';
import { NoAuthNavbar } from './NoAuthNavbar';

export interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const username = useAppSelector(getUserAuthUsername);

  const NavbarComponent = username ? AuthNavbar : NoAuthNavbar;

  return <NavbarComponent className={className} />;
});

export default Navbar;
