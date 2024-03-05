import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { userActions } from '@/entities/User';

import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/providers/StoreProvider';
import { AppLink, AppLinkVariants } from '@/shared/ui/AppLink';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Heading, TextHeadingTheme } from '@/shared/ui/Heading';

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
      <Heading className={style.appName} variant={TextHeadingTheme.INVERTED}>
        Test project
      </Heading>

      <AppLink
        to={routePath.articles_create}
        variants={AppLinkVariants.SECONDARY}
        className={style.createBtn}
      >
        {t('create_article')}
      </AppLink>

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
