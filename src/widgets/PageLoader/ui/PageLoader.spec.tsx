import { screen } from '@testing-library/react';

import { renderWithLibs } from '@/shared/lib/renderWithLibs/renderWithLibs';

import PageLoader from './PageLoader';

describe('test PageLoader', () => {
  beforeEach(() => {
    renderWithLibs(<PageLoader />);
  });

  test('The PageLoader renders', () => {
    expect(screen.getByTestId('PageLoader')).toBeInTheDocument();
  });
});