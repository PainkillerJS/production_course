import { screen } from '@testing-library/react';

import { renderWithLibs } from '@/shared/config/tests/renderWithLibs/renderWithLibs';

import Navbar from './Navbar';

describe('test navbar', () => {
  beforeEach(() => {
    renderWithLibs(<Navbar />);
  });

  test('The navbar renders', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
