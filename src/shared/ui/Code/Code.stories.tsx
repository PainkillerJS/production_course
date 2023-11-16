import type { Meta, StoryObj } from '@storybook/react';

import { Code } from '.';

export default {
  title: 'ui/Code',
  component: Code,
  argTypes: {
    text: {
      control: 'text',
      description: 'Код'
    }
  }
} as Meta<typeof Code>;

type StoryCodeType = StoryObj<typeof Code>;

export const CodeStory: StoryCodeType = {
  render: (props) => <Code {...props} />,
  args: {
    text: `
    import { type ReactNode } from 'react';

    import { clsx } from '@/shared/lib/classNames';
    
    interface CodeProps {
      /**
       * @description Кастомное имя стилей
       */
      className?: string;
      /**
       * @description Дочерний элемент
       */
      children: ReactNode;
    }
    
    export const Code = ({ className, children }: CodeProps) => {
      return <code className={clsx(className)}>{children}</code>;
    };`
  }
};
