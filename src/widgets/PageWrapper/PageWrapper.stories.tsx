import type { Meta, StoryObj } from '@storybook/react';

import { PageWrapper } from '.';

export default {
  title: 'widget/PageWrapper',
  component: PageWrapper,
  argTypes: {
    className: {
      control: 'text',
      description: 'Кастомный classname'
    },
    children: {
      control: 'text',
      description: 'Внутренние компоненты'
    }
  },
  args: {}
} as Meta<typeof PageWrapper>;

type StoryPageWrapperType = StoryObj<typeof PageWrapper>;

export const PageWrapperStory: StoryPageWrapperType = {
  render: (props) => <PageWrapper {...props} />,
  args: {
    children: 1
  }
};
