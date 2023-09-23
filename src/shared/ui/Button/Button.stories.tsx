import type { Meta, StoryObj } from '@storybook/react';

import Button, { SizeFontButton, SizeSquaredButton, ThemeButton } from './Button';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Текст кнопки'
    },
    variant: {
      control: 'select',
      description: 'Вид кнопки',
      options: ThemeButton,
      defaultValue: ThemeButton.CLEAR
    },
    isSquare: {
      control: 'boolean',
      description: 'Сделать кнопку квадратной',
      defaultValue: false
    },
    sizeFont: {
      control: 'select',
      description: 'Шрифт кнопки',
      options: SizeFontButton,
      defaultValue: SizeFontButton.M
    },
    sizeSquared: {
      if: {
        arg: 'isSquare'
      },
      control: 'select',
      description: 'Размеры кнопки (для работы поле isSquare должно быть true)',
      options: SizeSquaredButton,
      defaultValue: SizeSquaredButton.M
    }
  }
} as Meta<typeof Button>;

type StoryButtonType = StoryObj<typeof Button>;

export const ButtonStory: StoryButtonType = {
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
  args: {
    children: 'Button'
  }
};
