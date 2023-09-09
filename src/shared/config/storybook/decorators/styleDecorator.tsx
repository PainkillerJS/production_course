import { type Decorator } from '@storybook/react';

import { Theme } from '../../theme';

import '../../../../app/styles/index.scss';

export const StyleDecorator: Decorator = (Story, context) => {
  return (
    <div className={context.globals.theme || Theme.LIGHT}>
      <Story />
    </div>
  );
};
