import { render, screen } from '@testing-library/react';

import Button, { ThemeButton } from './Button';

describe('Testing Button', () => {
  test('The button shows on the Document', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('The button has a classname "clear"', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(ThemeButton.CLEAR);
  });

  test('The button has a classname "outline"', () => {
    render(<Button variant={ThemeButton.OUTLINE}>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(ThemeButton.OUTLINE);
  });
});
