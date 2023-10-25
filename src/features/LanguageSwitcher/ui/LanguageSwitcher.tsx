import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import Button from '@/shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
  isShortName?: boolean;
}

export const LanguageSwitcher = memo(({ className, isShortName }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={clsx(className)} onClick={toggle}>
      {t(isShortName ? 'short name' : 'lang')}
    </Button>
  );
});
