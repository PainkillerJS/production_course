import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Heading, HeadingSize, TextHeadingTheme } from '.';

describe('The test heading component', () => {
  test('The heading is rendering', () => {
    const { getByText } = componentRender(<Heading>Lorem ipsum dolor sit amet.</Heading>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toBeInTheDocument();
  });

  test('The heading is rendering with custom className', () => {
    const { getByText } = componentRender(
      <Heading className='test'>Lorem ipsum dolor sit amet.</Heading>
    );

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass('test');
  });

  test('The heading is change variant', () => {
    const { rerender, getByText } = componentRender(<Heading>Lorem ipsum dolor sit amet.</Heading>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass('primary');

    rerender(<Heading variant={TextHeadingTheme.ERROR}>Lorem ipsum dolor sit amet.</Heading>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass('error');
  });

  test('The heading is change size', () => {
    const { rerender, getByText } = componentRender(<Heading>Lorem ipsum dolor sit amet.</Heading>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass('size_m');

    rerender(<Heading size={HeadingSize.L}>Lorem ipsum dolor sit amet.</Heading>);

    expect(getByText('Lorem ipsum dolor sit amet.')).toHaveClass('size_l');
  });
});
