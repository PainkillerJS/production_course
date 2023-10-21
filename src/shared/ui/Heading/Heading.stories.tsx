import { type Meta, type StoryObj } from '@storybook/react';

import { Heading, TextHeadingTheme } from '.';

export default {
  title: 'ui/Heading',
  component: Heading,
  argTypes: {
    children: {
      control: 'text',
      description: 'Текст кнопки'
    },
    variant: { control: 'select', options: TextHeadingTheme.PRIMARY }
  },
  args: {
    children: 'Heading',
    variant: TextHeadingTheme.PRIMARY
  }
} as Meta<typeof Heading>;

type StoryHeadingType = StoryObj<typeof Heading>;

export const HeadingStory: StoryHeadingType = {
  render: ({ children, ...props }) => <Heading {...props}>{children}</Heading>
};
