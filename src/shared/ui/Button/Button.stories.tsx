import type { Meta, StoryObj } from '@storybook/react';

import Button, { ThemeButton } from './Button';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ThemeButton
    }
  }
} as Meta<typeof Button>;

type StoryButtonType = StoryObj<typeof Button>;

export const ButtonStory: StoryButtonType = {
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  args: {
    children: 'Button',
    variant: ThemeButton.CLEAR
  }
};
