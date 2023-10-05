import { type FC, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal';

import style from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <nav data-testid='navbar' className={clsx(style.navbar, className)}>
      <Button
        variant={ThemeButton.CLEAR_INVERTED}
        onClick={onToggleModal}
        className={clsx(style.login)}
      >
        {t('login')}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non est libero possimus eius quod
        illum, ipsa perspiciatis dolore laudantium atque expedita vel ratione? Impedit expedita,
        excepturi accusantium modi cum voluptatibus.
      </Modal>
    </nav>
  );
};

export default Navbar;
