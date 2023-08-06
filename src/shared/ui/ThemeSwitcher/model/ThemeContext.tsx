import { createContext, useContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextType {
  theme: Theme;
  setTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
