import type { Meta, StoryObj } from '@storybook/react';

import { type DropDownDirecton, ListBox } from '.';

export default {
  title: 'ui/ListBox',
  component: ListBox,
  argTypes: {
    label: {
      control: 'text'
    },
    initialValue: {
      control: 'text'
    },
    isReadonly: {
      control: 'text'
    },
    direction: {
      control: 'select',
      options: ['bottom', 'top'] as DropDownDirecton[]
    }
  },
  args: {
    direction: 'bottom'
  },
  parameters: {
    controls: { include: ['label', 'isReadonly', 'initialValue', 'direction'] }
  }
} as Meta<typeof ListBox>;

type StoryListBoxType = StoryObj<typeof ListBox>;

export const SelectStory: StoryListBoxType = {
  render: (props) => <ListBox {...props} />,
  tags: ['autodocs'],
  args: {
    label: 'test',
    items: [
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
