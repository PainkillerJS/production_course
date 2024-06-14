import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { type OptionsType, Select } from '.';

const testOptions: OptionsType[] = [
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

describe('test component = Select', () => {
  test('The Select render', () => {
    const { getByTestId } = componentRender(<Select options={testOptions} label='test label' />);

    expect(getByTestId('select')).toBeInTheDocument();
  });

  test('The label text render', () => {
    const { getByText } = componentRender(<Select options={testOptions} label='test label' />);

    expect(getByText(/test label/)).toBeInTheDocument();
  });

  test('The list options are rendering', () => {
    const { getByTestId } = componentRender(<Select options={testOptions} label='test label' />);

    const selectComponent = getByTestId('select');
    const select = selectComponent.childNodes[selectComponent.childNodes.length - 1];

    expect(select.childNodes.length).toBe(testOptions.length);
  });

  test('The select is disabled', () => {
    const { getByTestId, rerender } = componentRender(
      <Select options={testOptions} label='test label' />
    );

    expect(getByTestId('select')).not.toHaveClass('disabled');
    rerender(<Select options={testOptions} label='test label' isDisabled />);
    expect(getByTestId('select')).toHaveClass(/disabled/);
  });
});
