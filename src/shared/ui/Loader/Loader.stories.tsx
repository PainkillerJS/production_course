import type { Meta, StoryObj } from '@storybook/react';

import Loader from '.';

export default {
  title: 'ui/Loader',
  tags: ['autodocs'],
  component: Loader
} as Meta<typeof Loader>;

type StoryButtonType = StoryObj<typeof Loader>;

export const LoaderStory: StoryButtonType = {
  render: (props) => <Loader {...props} />
};
