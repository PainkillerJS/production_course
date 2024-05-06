import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '.';

export default {
  title: 'ui/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Кастомный className для стилей'
    },
    height: {
      control: 'number',
      description: 'Высота скелетки',
      defaultValue: 10
    },
    width: {
      control: 'number',
      description: 'Ширина скелетки',
      defaultValue: 100
    },
    borderRadius: {
      control: 'number',
      description: 'Округление скелетки'
    }
  }
} as Meta<typeof Skeleton>;

type StorySkeletonType = StoryObj<typeof Skeleton>;

export const SkeletonStory: StorySkeletonType = {
  render: (props) => <Skeleton {...props} />
};
