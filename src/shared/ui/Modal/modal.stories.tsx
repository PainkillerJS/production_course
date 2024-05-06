import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';

export default {
  title: 'widget/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, vero.'
  },
  argTypes: {
    isOpen: {
      control: 'boolean'
    },
    children: {
      control: 'text'
    }
  }
} as Meta<typeof Modal>;

type StoryButtonType = StoryObj<typeof Modal>;

export const ModalStory: StoryButtonType = {
  render: (props) => <Modal {...props} />
};
