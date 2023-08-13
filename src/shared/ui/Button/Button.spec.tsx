import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Testing Button', () => {
  test('The button shows on the Document', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('The button has a classname "clear"', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
