import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Counter } from './Counter';

describe('Test Counter Component', () => {
  beforeEach(() => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
  });

  test('render counter component', () => {
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('change state after click btns', () => {
    const incButton = screen.getByTestId('increment-button');
    const decButton = screen.getByTestId('decrement-button');

    fireEvent.click(incButton);

    expect(screen.getByTestId('value-title')).toHaveTextContent('11');

    fireEvent.click(decButton);
    fireEvent.click(decButton);

    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
