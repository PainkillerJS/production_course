import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { NoAuthNavbar } from '.';

describe('test NoAuthNavbar', () => {
  beforeEach(() => {
    componentRender(<NoAuthNavbar />);
  });

  test('The NoAuthNavbar renders', () => {
    expect(screen.getByTestId('navbar-noauth')).toBeInTheDocument();
  });
});
