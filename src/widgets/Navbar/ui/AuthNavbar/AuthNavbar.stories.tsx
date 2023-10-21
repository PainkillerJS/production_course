import type { Meta, StoryObj } from '@storybook/react';

import { AuthNavbar } from '.';

export default {
  title: 'widget/AuthNavbar',
  component: AuthNavbar
} as Meta<typeof AuthNavbar>;

type StoryAuthNavbarType = StoryObj<typeof AuthNavbar>;

export const AuthNavbarStory: StoryAuthNavbarType = {
  render: (props) => <AuthNavbar {...props} />
};
