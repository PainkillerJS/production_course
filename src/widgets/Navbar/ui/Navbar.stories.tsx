import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar
} as Meta<typeof Navbar>;

type StoryButtonType = StoryObj<typeof Navbar>;

export const SidebarStory: StoryButtonType = {
  render: (props) => <Navbar {...props} />
};
