import { fireEvent } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { type PatternItem, ListBox } from '.';

const testOptions: PatternItem[] = [
  {
    value: 'test',
    content: 'test'
  },
  {
    value: 'test 1',
    content: 'test 1'
  },
  {
    value: 'test 2',
    content: 'test 2'
  }
];

describe('The test ListBox component', () => {
  test('The ListBox is rendering', () => {
    const { getByTestId } = componentRender(<ListBox items={testOptions} />);

    expect(getByTestId('ListBox')).toBeInTheDocument();
  });

  test('The ListBox is rendering with items', () => {
    const { getByTestId } = componentRender(<ListBox items={testOptions} />);

    fireEvent.click(getByTestId('ListBox-button'));

    expect(getByTestId('ListBox-options').children.length).toBe(testOptions.length);
  });

  test('The ListBox is rendering with label', () => {
    const { getByTestId } = componentRender(<ListBox items={testOptions} label='label-test' />);

    expect(getByTestId('ListBox-label')).toBeInTheDocument();
  });

  test('The ListBox is rendering with initial value', () => {
    const { getByTestId } = componentRender(
      <ListBox items={testOptions} initialValue='initialValue-test' />
    );

    expect(getByTestId('ListBox-button').innerHTML).toBe('initialValue-test');
  });

  test('The ListBox is rendering with value', () => {
    const { getByTestId, rerender } = componentRender(
      <ListBox items={testOptions} initialValue='initialValue-test' />
    );

    expect(getByTestId('ListBox-button').innerHTML).toBe('initialValue-test');

    rerender(
      <ListBox items={testOptions} initialValue='initialValue-test' value={testOptions[0].value} />
    );

    expect(getByTestId('ListBox-button').innerHTML).toBe(testOptions[0].value);
  });
});
