import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Card } from '.';

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

describe('Testing Card component', () => {
  test('The Card component shows on the Document', () => {
    const { getByTestId } = componentRender(<Card>{testCode}</Card>);

    expect(getByTestId('card')).toBeInTheDocument();
  });
});
