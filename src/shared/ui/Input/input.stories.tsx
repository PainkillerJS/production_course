import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'ui/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text'
    }
  }
} as Meta<typeof Input>;

type StoryInputType = StoryObj<typeof Input>;

export const InputStory: StoryInputType = {
  render: (props) => <Input {...props} />,
  args: {
    placeholder: 'example'
  }
};
