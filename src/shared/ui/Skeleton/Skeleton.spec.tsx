import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Skeleton } from '.';

describe('Testing Skeleton', () => {
  test('The skeleton shows on the Document', () => {
    const { getByTestId } = componentRender(<Skeleton />);

    expect(getByTestId('skeleton')).toBeInTheDocument();
  });

  test('The skeleton set inline style', () => {
    const { getByTestId } = componentRender(<Skeleton width={20} height={20} />);

    expect(getByTestId('skeleton')).toHaveAttribute('style', 'height: 20px; width: 20px;');
  });
});
