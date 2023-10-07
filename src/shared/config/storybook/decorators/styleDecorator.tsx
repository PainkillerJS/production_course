import { useEffect } from 'react';

import { type Decorator } from '@storybook/react';

import { Theme } from '../../theme';

import '../../../../app/styles/index.scss';

export const StyleDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme || Theme.LIGHT;

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <Story />;
};
