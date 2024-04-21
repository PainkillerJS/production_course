import type { Meta, StoryObj } from '@storybook/react';

import { type FlexAlign, type FlexDirection, type FlexJustify, Flex } from '.';

export default {
  title: 'ui/Flex',
  component: Flex,
  argTypes: {
    justify: {
      control: 'select',
      description: 'Выравнивание по горизонтали',
      options: ['start', 'center', 'end', 'between'] satisfies FlexJustify[],
      defaultValue: 'start' satisfies FlexJustify
    },
    align: {
      control: 'select',
      description: 'Выравнивание по вертикали',
      options: ['start', 'center', 'end'] satisfies FlexAlign[],
      defaultValue: 'start' satisfies FlexAlign
    },
    direction: {
      control: 'select',
      description: 'Направление',
      options: ['column', 'row'] satisfies FlexDirection[],
      defaultValue: 'row' satisfies FlexDirection
    }
  },
  parameters: ['justify', 'align', 'direction']
} as Meta<typeof Flex>;

type StoryFlexType = StoryObj<typeof Flex>;

export const SkeletonStory: StoryFlexType = {
  render: (props) => <Flex {...props} />
};
