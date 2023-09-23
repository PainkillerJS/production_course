import { screen } from '@testing-library/react';

import { renderWithLibs } from '@/shared/config/tests/renderWithLibs/renderWithLibs';

import AppLinks from './AppLinks';

describe('test AppLinks', () => {
  beforeEach(() => {
    renderWithLibs(<AppLinks to='' />);
  });

  test('The AppLinks renders', () => {
    expect(screen.getByTestId('appLinks')).toBeInTheDocument();
  });
});
