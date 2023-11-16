import userEvent from '@testing-library/user-event';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Code } from '.';

const testCode = `
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
  };
`;

describe('Testing Code component', () => {
  test('The Code component shows on the Document', () => {
    const { getByTestId } = componentRender(<Code text={testCode} />);

    expect(getByTestId('code')).toBeInTheDocument();
  });

  test('The button is click for copy"', async () => {
    const user = userEvent.setup();
    const { getByTestId } = componentRender(<Code text={testCode} />);

    const copyButton = getByTestId('code-btn');

    await user.click(copyButton);

    const clipboardText = await navigator.clipboard.readText();

    expect(clipboardText).toBe(testCode);
  });
});
