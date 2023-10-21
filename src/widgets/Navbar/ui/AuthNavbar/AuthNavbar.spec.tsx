import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { AuthNavbar } from '.';

describe('test AuthNavbar', () => {
  beforeEach(() => {
    componentRender(<AuthNavbar />);
  });

  test('The AuthNavbar renders', () => {
    expect(screen.getByTestId('navbar-auth')).toBeInTheDocument();
  });
});
