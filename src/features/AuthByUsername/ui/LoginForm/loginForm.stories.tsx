import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {}
} as Meta<typeof LoginForm>;

type StoryLoginFormType = StoryObj<typeof LoginForm>;

export const InputStory: StoryLoginFormType = {
  render: (props) => <LoginForm {...props} />
};
