import type { Preview } from '@storybook/react';

import { RouteDecorator } from '../../src/shared/config/storybook/decorators/routeDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/decorators/storeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator';
import { Theme } from '../../src/shared/config/theme';

const createTheme = (): Theme[] => {
  const themes = [];

  for (const key in Theme) {
    themes.push(Theme[key as keyof typeof Theme]);
  }

  return themes;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Смена темы',
      defaultValue: Theme.LIGHT,
      toolbar: {
        title: 'Theme',
        items: createTheme(),
        dynamicTitle: true
      }
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    StyleDecorator,
    RouteDecorator,
    StoreDecorator({ login: { username: 'test', password: '123' } })
  ]
};

export default preview;
