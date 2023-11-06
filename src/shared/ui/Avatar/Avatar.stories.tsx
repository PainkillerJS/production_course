import type { Meta, StoryObj } from '@storybook/react';

import TestImage from '../../config/tests/img/testImage.png';

import { Avatar } from '.';

export default {
  title: 'ui/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'number',
      description: 'Размер картинки'
    },
    srcImg: {
      control: 'text',
      description: 'Ссылка на картинку'
    },
    alt: {
      control: 'text',
      description: 'Надпись вместо картинки'
    },
    className: {
      control: 'text',
      description: 'Кастомный classname'
    }
  },
  args: {
    size: 150,
    srcImg: TestImage
  }
} as Meta<typeof Avatar>;

type StoryAvatarType = StoryObj<typeof Avatar>;

export const AvatarStory: StoryAvatarType = {
  render: (props) => <Avatar {...props} />
};
