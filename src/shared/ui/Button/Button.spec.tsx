import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import Button, { SizeFontButton, SizeSquaredButton, ThemeButton } from './Button';

describe('Testing Button', () => {
  test('The button shows on the Document', () => {
    componentRender(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('The button has a classname "clear"', () => {
    componentRender(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(ThemeButton.CLEAR);
  });

  test('The button has a classname "outline"', () => {
    componentRender(<Button variant={ThemeButton.OUTLINE}>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(ThemeButton.OUTLINE);
  });

  test('The button has a classname "size_font_m"', () => {
    componentRender(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(SizeFontButton.M);
  });

  test('The button has a classname "size_font_l"', () => {
    componentRender(<Button sizeFont={SizeFontButton.L}>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(SizeFontButton.L);
  });

  test('The button has a classname "square.m"', () => {
    componentRender(<Button isSquare>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass(`square ${SizeSquaredButton.M}`);
  });

  test('The button does`t has a classname "square.m" without isSquared with value true', () => {
    componentRender(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).not.toHaveClass(`square ${SizeSquaredButton.M}`);
  });

  test('The button has a classname "square.l"', () => {
    componentRender(
      <Button sizeSquared={SizeSquaredButton.L} isSquare>
        TEST
      </Button>
    );

    expect(screen.getByText('TEST')).toHaveClass(`square ${SizeSquaredButton.L}`);
  });

  test('The button is disabled"', () => {
    const { rerender } = componentRender(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).not.toHaveClass('disabled');

    const onClickTest = jest.fn();

    rerender(
      <Button onClick={onClickTest} disabled>
        TEST
      </Button>
    );

    fireEvent.click(screen.getByText('TEST'));

    expect(onClickTest).toHaveBeenCalledTimes(0);
  });
});
