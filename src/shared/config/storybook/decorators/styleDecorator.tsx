import { type Decorator } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider';

import { Theme } from '../../theme';

import '../../../../app/styles/index.scss';

export const StyleDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || Theme.LIGHT;

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={theme}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
