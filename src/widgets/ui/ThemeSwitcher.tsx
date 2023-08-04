import { clsx } from '@/shared/lib/helpers/classNames';
import { type FC } from 'react';
import styles from './themeSwitcher.module.scss';
import { Theme, useTheme } from '../../shared/ui/ThemeSwitcher/model/ThemeContext';
import DarkIcon from '../../shared/assets/icons/theme-dark.svg';
import LightIcon from '../../shared/assets/icons/theme-dark.svg';
import Button from '../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button className={clsx(styles.themeSwitcher, className)} onClick={setTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
