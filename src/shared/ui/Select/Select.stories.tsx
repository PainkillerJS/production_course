import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

export default {
  title: 'ui/Select',
  component: Select,
  argTypes: {
    className: {
      control: 'text',
      description: 'Кастомный classname'
    },
    label: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    }
  }
} as Meta<typeof Select>;

type StorySelectType = StoryObj<typeof Select>;

export const SelectStory: StorySelectType = {
  render: (props) => <Select {...props} />,
  tags: ['autodocs'],
  args: {
    label: 'test',
    options: [
      {
        value: 'test',
        content: 'test'
      },
      {
        value: 'test 1',
        content: 'test 1'
      },
      {
        value: 'test 2',
        content: 'test 2'
      }
    ]
  }
};
