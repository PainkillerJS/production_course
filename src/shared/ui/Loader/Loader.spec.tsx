import { screen } from '@testing-library/react';

import { renderWithLibs } from '@/shared/lib/renderWithLibs/renderWithLibs';

import Loader from '.';

describe('test Loader', () => {
  beforeEach(() => {
    renderWithLibs(<Loader />);
  });

  test('The Loader renders', () => {
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
