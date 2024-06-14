import { fireEvent } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Input } from '.';

describe('testing input', () => {
  test('Mount input', () => {
    const { getByTestId } = componentRender(<Input />);

    expect(getByTestId('input')).toBeInTheDocument();
  });

  test('Mount input`s placeholder', () => {
    const { queryByText, rerender } = componentRender(<Input />);

    expect(queryByText(/placeholder test/)).not.toBeInTheDocument();

    rerender(<Input placeholder='placeholder test' />);

    expect(queryByText(/placeholder test/)).toBeInTheDocument();
  });

  test('Change input value', () => {
    const { getByTestId } = componentRender(<Input />);

    const input = getByTestId('input') as HTMLInputElement;

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: '23' } });

    expect(input.value).toBe('23');
  });

  test('test autofocus', () => {
    const { getByTestId, rerender } = componentRender(<Input />);

    expect(getByTestId('input')).not.toHaveFocus();

    rerender(<Input autoFocus />);

    expect(getByTestId('input')).toHaveFocus();
  });

  test('test readonly', () => {
    const { getByTestId, rerender } = componentRender(<Input />);

    expect(getByTestId('input')).not.toHaveAttribute('readonly');
    expect(getByTestId('input').parentNode?.parentNode).not.toHaveClass('readonly');

    rerender(<Input isReadonly />);

    expect(getByTestId('input')).toHaveAttribute('readonly');
    expect(getByTestId('input').parentNode?.parentNode).toHaveClass(/readonly/);
  });
});
