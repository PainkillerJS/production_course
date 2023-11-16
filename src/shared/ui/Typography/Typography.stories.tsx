import { type Meta, type StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from '.';

export default {
  title: 'ui/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
      description: 'Текст кнопки'
    },
    variant: { control: 'select', options: TextTheme, defaultValue: TextTheme.PRIMARY },
    size: { control: 'select', options: TextSize, defaultValue: TextSize.M }
  },
  args: {
    variant: TextTheme.PRIMARY,
    children: 'Text'
  }
} as Meta<typeof Text>;

type StoryTextType = StoryObj<typeof Text>;

export const TextStory: StoryTextType = {
  render: ({ children, ...props }) => <Text {...props}>{children}</Text>
};
