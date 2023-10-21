import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { userActions } from '@/entities/User';

import { clsx } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';

import { type NavbarProps } from '../Navbar';

import style from '../navbar.module.scss';

export const AuthNavbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <nav data-testid='navbar-auth' className={clsx(style.navbar, className)}>
      <Button
        data-testid='logout'
        variant={ThemeButton.CLEAR_INVERTED}
        onClick={onLogout}
        className={clsx(style.login)}
      >
        {t('logout')}
      </Button>
    </nav>
  );
};
