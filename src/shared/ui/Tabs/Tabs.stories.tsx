import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '.';

export default {
  title: 'ui/Tabs',
  component: Tabs,
  argTypes: {
    className: {
      control: 'text',
      description: 'Кастомный classname'
    }
  }
} as Meta<typeof Tabs>;

type StoryTabsType = StoryObj<typeof Tabs>;

export const TabsStory: StoryTabsType = {
  render: (props) => <Tabs {...props} />,
  args: {
    tabs: [
      {
        content: 'test1',
        value: 'test1'
      },
      {
        content: 'test2',
        value: 'test2'
      },
      {
        content: 'test3',
        value: 'test3'
      }
    ],
    value: 'test2',
    onClickTab: action('onClickTab')
  }
};
