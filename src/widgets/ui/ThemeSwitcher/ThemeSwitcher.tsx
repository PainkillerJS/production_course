import { type FC } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { clsx } from '@/shared/lib/classNames';
import Button from '@/shared/ui/Button/Button';
import { Theme, useTheme } from '@/shared/ui/ThemeSwitcher';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button className={clsx(className)} onClick={setTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
