import { clsx } from '@/shared/lib/helpers/classNames';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './languageSwitcher.module.scss';
import Button from '@/shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={clsx(styles.languageSwitcher, className)} onClick={toggle}>
      {t('lang')}
    </Button>
  );
};
