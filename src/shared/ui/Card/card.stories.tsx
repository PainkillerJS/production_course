import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'ui/Card',
  component: Card,
  argTypes: {
    children: {
      control: 'text',
      description: 'Внутренности карточки'
    }
  }
} as Meta<typeof Card>;

type StoryCardType = StoryObj<typeof Card>;

export const CardStory: StoryCardType = {
  render: ({ children, ...props }) => <Card {...props}>{children}</Card>,
  args: {
    children: 'Card'
  }
};
