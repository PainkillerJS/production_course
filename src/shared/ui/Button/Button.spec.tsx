import { render, screen } from '@testing-library/react';

import Button, { SizeFontButton, SizeSquaredButton, ThemeButton } from './Button';

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

  test('The button has a classname "size_font_m"', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(SizeFontButton.M);
  });

  test('The button has a classname "size_font_l"', () => {
    render(<Button sizeFont={SizeFontButton.L}>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(SizeFontButton.L);
  });

  test('The button has a classname "square.m"', () => {
    render(<Button isSquare>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(`square ${SizeSquaredButton.M}`);
  });

  test('The button does`t has a classname "square.m" without isSquared with value true', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).not.toHaveClass(`square ${SizeSquaredButton.M}`);
  });

  test('The button has a classname "square.l"', () => {
    render(
      <Button sizeSquared={SizeSquaredButton.L} isSquare>
        TEST
      </Button>
    );

    expect(screen.getByText('TEST')).toHaveClass(`square ${SizeSquaredButton.L}`);
  });
});
