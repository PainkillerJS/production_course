import { screen } from '@testing-library/react';

import { renderWithLibs } from '@/shared/lib/renderWithLibs/renderWithLibs';

import PageError from './PageError';

describe('test PageError', () => {
  beforeEach(() => {
    renderWithLibs(<PageError />);
  });

  test('The PageError renders', () => {
    expect(screen.getByTestId('pageError')).toBeInTheDocument();
  });
});
