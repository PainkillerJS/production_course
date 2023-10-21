import type { Meta, StoryObj } from '@storybook/react';

import { NoAuthNavbar } from '.';

export default {
  title: 'widget/NoAuthNavbar',
  component: NoAuthNavbar
} as Meta<typeof NoAuthNavbar>;

type StoryNoAuthNavbarType = StoryObj<typeof NoAuthNavbar>;

export const StoryNoAuthNavbar: StoryNoAuthNavbarType = {
  render: (props) => <NoAuthNavbar {...props} />
};
