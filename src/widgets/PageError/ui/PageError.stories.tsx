import type { Meta, StoryObj } from '@storybook/react';

import PageError from './PageError';

export default {
  title: 'widget/PageError',
  component: PageError
} as Meta<typeof PageError>;

type StoryButtonType = StoryObj<typeof PageError>;

export const PageErrorStory: StoryButtonType = {
  render: (props) => <PageError {...props} />
};
