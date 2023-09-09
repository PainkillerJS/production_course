import type { Meta, StoryObj } from '@storybook/react';

import AppLinks from './AppLinks';

export default {
  title: 'ui/AppLinks',
  component: AppLinks,
  argTypes: {
    children: {
      control: 'text'
    }
  }
} as Meta<typeof AppLinks>;

type StoryButtonType = StoryObj<typeof AppLinks>;

export const AppLinksStory: StoryButtonType = {
  render: (props) => <AppLinks {...props} />,
  args: {
    children: ' Ссылка'
  }
};
