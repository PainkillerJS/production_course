import type { Meta, StoryObj } from '@storybook/react';

import { type FlexAlign, type FlexDirection, type FlexGap, type FlexJustify, Flex } from '.';

export default {
  title: 'ui/Flex',
  component: Flex,
  tags: ['autodocs'],
  args: {
    justify: 'start',
    align: 'start',
    direction: 'row'
  },
  argTypes: {
    justify: {
      control: 'select',
      description: 'Выравнивание по горизонтали',
      options: ['start', 'center', 'end', 'between'] satisfies FlexJustify[]
    },
    align: {
      control: 'select',
      description: 'Выравнивание по вертикали',
      options: ['start', 'center', 'end'] satisfies FlexAlign[]
    },
    direction: {
      control: 'select',
      description: 'Направление',
      options: ['column', 'row'] satisfies FlexDirection[]
    },
    gap: {
      control: 'select',
      description: 'Отступы между блоками',
      options: ['4', '8', '16', '32'] satisfies FlexGap[]
    }
  },
  parameters: {
    controls: { include: ['justify', 'align', 'direction', 'gap'] }
  }
} satisfies Meta<typeof Flex>;

type StoryFlexType = StoryObj<typeof Flex>;

export const FlexStory: StoryFlexType = {
  render: (props) => <Flex {...props} />,
  args: {
    children: (
      <>
        <div>flex</div>
        <div>flex</div>
        <div>flex</div>
        <div>flex</div>
      </>
    )
  }
};
