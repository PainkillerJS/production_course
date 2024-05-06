import type { Meta, StoryObj } from '@storybook/react';

import AppLink from './AppLink';

export default {
  title: 'ui/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text'
    }
  }
} as Meta<typeof AppLink>;

type StoryButtonType = StoryObj<typeof AppLink>;

export const AppLinkStory: StoryButtonType = {
  render: (props) => <AppLink {...props} />,
  args: {
    children: ' Ссылка'
  }
};
