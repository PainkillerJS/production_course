import { screen } from '@testing-library/react';

import { renderWithLibs } from '@/shared/lib/renderWithLibs/renderWithLibs';

import Navbar from './Navbar';

describe('test navbar', () => {
  beforeEach(() => {
    renderWithLibs(<Navbar />);
  });

  test('The navbar renders', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('The navbar links wrapper renders', () => {
    expect(screen.getByTestId('links')).toBeInTheDocument();
  });
});
