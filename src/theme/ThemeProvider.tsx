import { useState, type FC, type PropsWithChildren } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const setThemeAction = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme: setThemeAction }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
