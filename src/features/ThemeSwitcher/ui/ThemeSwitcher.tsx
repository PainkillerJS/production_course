import { memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme, useTheme } from '@/shared/config/theme';
import { clsx } from '@/shared/lib/classNames';
import Button from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button data-testid='themeSwitcher' className={clsx(className)} onClick={setTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
