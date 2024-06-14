import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Text, TextSize, TextTheme } from '.';

describe('The test typography component', () => {
  test('The typography is rendering', () => {
    const { getByText } = componentRender(<Text>Lorem ipsum dolor sit amet.</Text>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toBeInTheDocument();
  });

  test('The typography is rendering with custom className', () => {
    const { getByText } = componentRender(
      <Text className='test'>Lorem ipsum dolor sit amet.</Text>
    );

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass('test');
  });

  test('The typography is change variant', () => {
    const { rerender, getByText } = componentRender(<Text>Lorem ipsum dolor sit amet.</Text>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass(/primary/);

    rerender(<Text variant={TextTheme.ERROR}>Lorem ipsum dolor sit amet.</Text>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass(/error/);
  });

  test('The typography is change size', () => {
    const { rerender, getByText } = componentRender(<Text>Lorem ipsum dolor sit amet.</Text>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass(/size_m/);

    rerender(<Text size={TextSize.L}>Lorem ipsum dolor sit amet.</Text>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass(/size_l/);
  });
});
