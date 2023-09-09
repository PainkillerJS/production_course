import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar
} as Meta<typeof Sidebar>;

type StoryButtonType = StoryObj<typeof Sidebar>;

export const SidebarStory: StoryButtonType = {
  render: (props) => <Sidebar {...props} />
};
