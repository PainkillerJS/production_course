import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/decorators/storeDecorator';

import { loginReducer } from '../../model/slice';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {}
} as Meta<typeof LoginForm>;

type StoryLoginFormType = StoryObj<typeof LoginForm>;

const asyncRedusers = { login: loginReducer };

export const LoginFormStory: StoryLoginFormType = {
  render: (props) => <LoginForm {...props} />,
  decorators: [
    StoreDecorator(
      { login: { username: 'test', password: '123', isLoading: false } },
      asyncRedusers
    )
  ]
};

export const LoginFormErrorStory: StoryLoginFormType = {
  render: (props) => <LoginForm {...props} />,
  decorators: [
    StoreDecorator(
      { login: { username: 'test', password: '123', error: 'test error', isLoading: false } },
      asyncRedusers
    )
  ]
};

export const LoginFormIsLoadingStory: StoryLoginFormType = {
  render: (props) => <LoginForm {...props} />,
  decorators: [
    StoreDecorator({ login: { username: 'test', password: '123', isLoading: true } }, asyncRedusers)
  ]
};
