import { type FC, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { LoginModal } from '@/features/AuthByUsername';

import { clsx } from '@/shared/lib/classNames';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';

import style from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <nav data-testid='navbar' className={clsx(style.navbar, className)}>
      <Button
        variant={ThemeButton.CLEAR_INVERTED}
        onClick={onOpenModal}
        className={clsx(style.login)}
      >
        {t('login')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </nav>
  );
};

export default Navbar;
